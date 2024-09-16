import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the Item interface
interface Item {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

// Define the state interface
interface ItemsState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
};

// Async thunk for fetching items
export const HomeItems = createAsyncThunk<Item[], string>(
  "home/HomeItems",
  async (name: string) => {
    const headers = {
      "x-rapidapi-key": "969e1b7393msh3638890db05acaep17ac07jsn9a9a007ea4bf",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    };

    const { data } = await axios.get<Item[]>(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      {
        params: { category: name },
        headers,
      }
    );

    return data.slice(0, 40);
  }
);

// Create the slice
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(HomeItems.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error on new request
      })
      .addCase(HomeItems.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(HomeItems.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message || "Failed to fetch items";
      });
  },
});

// Export the reducer
export const HomeReducer = homeSlice.reducer;
