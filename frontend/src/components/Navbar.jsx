import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./ContextReducer";
import { useState } from "react";
import { CartModal } from "../Modal";
import { Cart } from "../screen/Cart";

export const Navbar = () => {
  const navigate = useNavigate();
  const data = useCart();
  const [viewModal, setViewModal] = useState(false);
  // console.log(data);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const loadCart = () => {
    setViewModal(true);
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-black bg-gradient fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item ">
              <Link className="nav-link  " aria-current="page" to="/">
                Home
              </Link>
            </li>
            {localStorage.getItem("authToken") && (
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/myorder">
                  My Orders
                </Link>
              </li>
            )}
          </ul>
          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Link className="btn btn-primary bg-gradient mx-1" to="/login">
                Login
              </Link>
              <Link
                className="btn btn-success bg-gradient mx-1"
                to="/createuser"
              >
                Signup
              </Link>
            </div>
          ) : (
            <div className="d-flex">
              <button
                type="button"
                className="btn btn-warning bg-gradient mx-1 "
                onClick={loadCart}
              >
                My Cart
                <span className="badge bg-white text-danger ms-2">
                  {data.length}
                </span>
              </button>
              {viewModal && (
                <CartModal onClose={() => setViewModal(false)}>
                  <Cart />
                </CartModal>
              )}
              <button
                type="button"
                className="btn btn-outline-danger mx-1 "
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
