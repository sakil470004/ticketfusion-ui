import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import GoogleLogin from "../../components/GoogleLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    await signIn(email, password).then(() => {
      toast.success("Successfully Logged In!");
      navigate(from, { replace: true });
    });
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <form onSubmit={handleSUbmit} className="hero min-h-screen bg-gradient-to-r from-green-500 to-blue-500 text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-extrabold mb-4">Welcome Back!</h1>
          <p className="text-lg mb-6">
            Log in to your account to manage your events and tickets effortlessly.
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
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-green-500"
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
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-green-500"
                name="password"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input
                className="btn bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                value="Login"
              />
            </div>
            <div className="mt-6">
              <GoogleLogin />
            </div>
            <div className="mt-6 text-center">
              <p>
                New here?{' '}
                <Link to="/register" className="text-green-500 hover:underline">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
