import React, { useEffect } from "react";
import { AppDispatch, RootStat } from "../../Store/Store";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Store/DetailsSlice/DetailsSlice";
import { Link, useParams } from "react-router-dom";

export const Details: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  let { id } = useParams();
  const { items, loading, error } = useSelector(
    (state: RootStat) => state.Details
  );
  console.log(items);

  useEffect(() => {
    if (id) {
      dispatch(getDetails(Number(id)));
    }
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <main>
        <div className="py-5 mt-4">
          <div className="row g-2">
            <div className=" col-md-4">
              <img
                className="w-100"
                src={items?.thumbnail}
                alt="image"
                draggable="false"
              />
              <div className="d-flex justify-content-between my-4 gap-3">
                <span className="free2 w-25">Free</span>
                <Link
                  className="btn btn-primary border-0 w-75 text-decoration-none "
                  to={`${items?.game_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PLAY NOW
                </Link>
              </div>
              <div className="w-100 free2 py-2 px-5 d-flex justify-content-between">
                <div className="like d-flex flex-column align-items-center">
                  <i className="fa-regular fa-face-smile fs-5 text-success"></i>
                  <span className="Text">20</span>
                  <span className="Text">LIKE</span>
                </div>
                <div className="like d-flex flex-column align-items-center ">
                  <i className="fa-regular fa-face-meh fs-5 text-secondary"></i>
                  <span className="Text">1</span>
                  <span className="Text">MEH</span>
                </div>
                <div className="like d-flex flex-column align-items-center">
                  <i className="fa-regular fa-face-frown fs-5 text-danger"></i>
                  <span className="Text">1</span>
                  <span className="Text">DISLIKE</span>
                </div>
              </div>
            </div>
            <div className=" col-md-8 p-4">
              <h2 className="Text">{items?.title}</h2>
              <div className="">
                <div className="mt-4">
                  <i className="fa-solid fa-crown Text me-2"></i>
                  <span className="Text">Very Positive</span>
                </div>
                <p className="Text mt-4">10 Member Ratings</p>
                <div className="d-flex align-items-center g-2 mt-2">
                  <i className="fa-solid fa-user Text me-2 fs-5 "></i>
                  <h6 className="align-self-end Text mt-2">
                    513 Members have this game in their library!
                  </h6>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div className="d-flex align-items-center g-2">
                    <i className="fa-regular fa-message Text me-2 fs-5"></i>
                    <h6 className="align-self-end Text mt-1">6 Reviews</h6>
                  </div>
                  <div className="d-flex align-items-center g-2">
                    <i className="fa-solid fa-up-long  Text me-2 fs-5"></i>
                    <h6 className="align-self-end Text mt-1">31%Popularity</h6>
                  </div>
                </div>
              </div>
              <h2 className="Text mt-5">About {items?.title}</h2>
              <p className="Text mt-4">
                {items?.description.split(" ").slice(0, 400).join(" ")}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
