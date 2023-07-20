import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <Link
          href="/"
          className=" me-2  text-body-secondary text-decoration-none lh-1"
        >
          Logo
        </Link>
        <span className=" text-body-secondary">© 2023 GoFood, Inc</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"></ul>
    </footer>
  );
};
