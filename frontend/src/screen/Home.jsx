import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const Home = () => {
  const [foodData, setFoodData] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [search, setSearch] = useState("");
  const loadData = async () => {
    const response = await fetch("http://localhost:5000/api/foodData");
    if (response.ok) {
      const result = await response.json();
      // console.log(result);
      setFoodData(result[0]);
      setFoodCategory(result[1]);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
      >
        <div className="carousel-inner">
          <div className="carousel-caption " style={{ zIndex: "10" }}>
            <div className="d-flex">
              <input
                className="form-control form-control-sm me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* <button className="btn btn-success btn-sm" type="submit">
                Search
              </button> */}
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900x700/?pasta"
              className="d-block w-100"
              alt="..."
              style={{
                filter: "brightness(40%)",
                backgroundImage:
                  "url(https://source.unsplash.com/random/900x700/?pasta)",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?burger"
              className="d-block w-100"
              alt="..."
              style={{
                filter: "brightness(40%)",
                backgroundImage:
                  "url(https://source.unsplash.com/random/900x700/?burger)",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?pizza"
              className="d-block w-100"
              alt="..."
              style={{
                filter: "brightness(40%)",
                backgroundImage:
                  "url(https://source.unsplash.com/random/900x700/?pizza)",
              }}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        {foodCategory !== [] ? (
          foodCategory.map((data) => (
            <div className="mb-3" key={data._id}>
              <h3 className="fs-3 m-3">{data.CategoryName}</h3>
              <hr />
              {foodData !== [] ? (
                <div className="d-flex justify-content-center justify-content-md-start flex-wrap">
                  {foodData
                    .filter(
                      (foodItem) =>
                        foodItem.CategoryName === data.CategoryName &&
                        foodItem.name
                          .toLowerCase()
                          .includes(search.toLowerCase())
                    )
                    .map((foodItem) => {
                      return <Card {...foodItem} key={foodItem._id} />;
                    })}
                </div>
              ) : (
                <div>No Data Found</div>
              )}
            </div>
          ))
        ) : (
          <div>------</div>
        )}
      </div>
    </>
  );
};
