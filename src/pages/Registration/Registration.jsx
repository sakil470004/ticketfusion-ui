import { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import GoogleLogin from "../../components/GoogleLogin";
import useAuth from "../../hooks/useAuth";

const Registration = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
      toast.error("Passwords do not match!");
    }

    console.log(email, password, confirm_password);

    if (password === confirm_password) {
      createUser(email, password)
        .then((data) => {
          toast.success("Successfully Login!");

          const userInfo = {
            name: data.user.displayName,
            email: data.user.email,
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              // added token to loacl storage
              localStorage.setItem("token", data.token);
              navigate(from, { replace: true });
            });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <form onSubmit={handleSUbmit} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Register to create an account and access all the features of the
            app.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                name="confirm_password"
                required
              />
            </div>
            {!passMatch && (
              <div className="my-2">
                <p className="text-red-500">Passwords do not match!</p>
              </div>
            )}
            <div className="form-control mt-6">
              <input
                className="btn bg-red-500 text-white"
                type="submit"
                value="Register"
              />
            </div>
            <div className="mt-6">
              <GoogleLogin />
            </div>
            <div className="mt-6">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-red-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registration;
