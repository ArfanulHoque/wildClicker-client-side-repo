import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.webp";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { userLogin, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Login </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label"></label>
            </div>
            <div>
              <p>{error}</p>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <h3 className="text-center text-2xl font-bold">or</h3>
            <div>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-primary w-full"
              >
                Login with Google
              </button>
            </div>
          </form>
          <p className="text-center">
            New to this site
            <Link to="/register" className="text-green-500 font-bold mx-2 ">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
