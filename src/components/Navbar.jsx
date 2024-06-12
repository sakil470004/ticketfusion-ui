import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../assets/logo.png";

import { BiExit } from "react-icons/bi";


const Navbar = () => {
  const { logout, user } = useAuth();

  const navigate = useNavigate();


  const handleLogout = async () => {
    await logout().then(() => {
      localStorage.removeItem("token");
    });
  };
  const handleProfile = () => {
    navigate("/dashboard");
  };
 
  
  return (
    <div className="navbar bg-base-100 pr-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          
            {user && (
              <>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm flex items-center justify-center bg-red-500 text-white"
                  >
                    <BiExit />
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to={"/"} className="cursor-pointer w-36 h-auto font-bold">
          <img className="w-full h-full" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-2">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          {!user && (
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          )}
          {user && (
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          )}
       
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="mr-4 btn btn-sm bg-red-500 text-white  lg:flex hidden  items-center justify-center"
            >
              <BiExit /> Logout
            </button>
       
            <div className="pl-4 avatar group" title={user?.displayName || ""}>
              <div
                onClick={handleProfile}
                className="w-12 rounded-full border-2 border-black group-hover:border-yellow-300"
              >
                <img
                  src={user?.photoURL ||
                    "/public/placeholder.jpg"
                  }
                />
              </div>
            </div>
          </>
        ) : (
          <button className="btn btn-sm btn-outline hover:bg-blue-900  lg:block">
            <Link to={"/login"}>Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
