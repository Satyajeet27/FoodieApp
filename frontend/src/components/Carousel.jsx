export const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-caption " style={{ zIndex: "10" }}>
          <form className="d-flex" role="search">
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success btn-sm" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="carousel-item active">
          <img
            src="https://source.unsplash.com/random/900x700/?pasta"
            className="d-block w-100"
            alt="..."
            style={{
              filter: "brightness(30%)",
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
              filter: "brightness(30%)",
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
              filter: "brightness(30%)",
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
