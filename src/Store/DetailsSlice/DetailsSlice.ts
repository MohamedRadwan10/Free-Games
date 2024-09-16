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
  description: string;
}

// Define the state interface
interface ItemsState {
  items: Item | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ItemsState = {
  items: null,
  loading: false,
  error: null,
};

// Async thunk for fetching items
export const getDetails = createAsyncThunk<Item, number>(
  "detailsSlice/getDetails",
  async (id: number) => {
    let headers = {
      "x-rapidapi-key": "969e1b7393msh3638890db05acaep17ac07jsn9a9a007ea4bf",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    };
    const { data } = await axios.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/game",
      {
        params: { id },
        headers,
      }
    );
    return data;
  }
);
// Create the slice
const DetailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error on new request
      })
      .addCase(getDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(getDetails.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message || "Failed to fetch items";
      });
  },
});

// Export the reducer
export const DetailsReducer = DetailsSlice.reducer;
