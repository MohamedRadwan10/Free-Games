import React, { useEffect } from "react";
import { AppDispatch, RootStat } from "../../Store/Store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HomeItems } from "../../Store/HomeSlice/HomeSlice";

export const Sports: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { items, loading, error } = useSelector(
    (state: RootStat) => state.home
  );
  console.log(items);

  useEffect(() => {
    dispatch(HomeItems("sports"));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <main>
        <div className=" row py-5 mt-4 ">
          <h1 className="Text">
            Top Free Sports Games for PC and Browser In 2024!
          </h1>
          <span className="Text2">
            <b>14</b> free-to-play <b>Sports games</b> found in our games list!
          </span>

          <div className="row g-4">
            {items.map((item) => (
              <div className="item col-md-3" key={item.id}>
                <Link
                  className="text-decoration-none text-dark"
                  to={`/details/${item.id}`}
                >
                  <div className="image">
                    <img
                      className="w-100"
                      src={item.thumbnail}
                      alt="image"
                      draggable="false"
                    />
                  </div>
                  <div className="info p-3">
                    <div className="d-flex justify-content-between">
                      <h5 className="Text">
                        {item.title.split(" ").slice(0, 2).join("")}
                      </h5>
                      <span className="free ">Free</span>
                    </div>
                    <span className="Text2">
                      {item.short_description.slice(0, 20)}...
                    </span>
                    <div className="icons d-flex justify-content-between mt-2">
                      <span className="genre">{item.genre}</span>
                      <span className="Text">{item.platform}</span>
                    </div>
                  </div>
                </Link>{" "}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
