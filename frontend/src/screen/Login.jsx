import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const user = {
    email: "",

    password: "",
  };

  const [credential, setCredenntial] = useState(user);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    });
    const result = await response.json();
    console.log(result);
    if (result.error) return alert("Please enter valid inputs");
    if (result.message) {
      localStorage.setItem("authToken", result.authToken);
      localStorage.setItem("user_email", credential.email);
      return navigate("/");
    }
  };
  const onChange = (e) => {
    setCredenntial({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="container w-75">
      <form onSubmit={handleSubmit}>
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
            Login
          </button>
          <span className="ms-2">
            Don't have account?{" "}
            <Link to="/createuser" className="d-inline nav-link text-primary">
              Signup
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};
