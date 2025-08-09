import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import GoogleLogin from "../../components/GoogleLogin";
import useAuth from "../../hooks/useAuth";

const Registration = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser } = useAuth();
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

    if (password === confirm_password) {
      createUser(email, password)
        .then((data) => {
          toast.success("Successfully Registered!");

          const userInfo = {
            name: data.user.displayName,
            email: data.user.email,
          };

          fetch("https://ticketfusion-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
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
    <form onSubmit={handleSUbmit} className="hero min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold mb-4">Join TicketFusion!</h1>
          <p className="text-lg mb-6">
            Create an account to unlock exclusive features and manage your events effortlessly.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-lg bg-white text-gray-800">
          <div className="card-body">
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                placeholder="Enter your password"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                placeholder="Confirm your password"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                value="Register"
              />
            </div>
            <div className="mt-6">
              <GoogleLogin />
            </div>
            <div className="mt-6 text-center">
              <p>
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">
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
