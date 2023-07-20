import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const user = {
    name: "",
    email: "",
    location: "",
    password: "",
  };

  const [credential, setCredenntial] = useState(user);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    });
    const result = await response.json();
    if (result.error) return alert("Please enter valid inputs");
    if (result.message) return navigate("/");
    // console.log(result);
  };
  const onChange = (e) => {
    setCredenntial({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="container w-75">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            name="name"
            value={credential.name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credential.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="name"
            className="form-control"
            id="address"
            aria-describedby="nameHelp"
            name="location"
            value={credential.location}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credential.password}
            onChange={onChange}
          />
        </div>

        <div className="">
          <button
            type="submit"
            className="btn bg-success  bg-gradient text-light"
          >
            Submit
          </button>
          <span className="ms-2">
            Already a user?{" "}
            <Link to="/login" className="d-inline nav-link text-primary">
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};
