import { BiChart } from "react-icons/bi";
import { BsPeople, BsShop } from "react-icons/bs";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { GrOrderedList } from "react-icons/gr";
import { MdAllInbox, MdPayment } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
function DashboardSideBar() {
  return (
   
      <ul className="menu p-4 w-80  bg-base-100 text-base-content flex flex-col gap-2 border-r-4 border-gray-500 scroll">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="logo"
          className=" w-10 rounded-full mx-auto"
        />
        {/* Sidebar content here */}
        <hr className="bg-blue-100 h-1" />
        <li className="btn text-lg p-0 flex  w-full h-full  hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full" to="/dashboard">
            {" "}
            <BiChart /> Dashboard
          </Link>
        </li>
        <hr className="bg-blue-100 h-1" />

        <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full " to="/dashboard/add-event">
            {" "}
            <IoAddCircle /> Add Event
          </Link>
        </li>
        <hr className="bg-blue-100 h-1" />

        <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full" to="/dashboard/events">
            {" "}
            <MdAllInbox />
            All Events
          </Link>
        </li>
     

        <hr className="bg-blue-100 h-1" />
        <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full" to="/dashboard/booking">
            {" "}
            <GrOrderedList /> My Booking
          </Link>
        </li>

        <hr className="bg-blue-100 h-1" />

        <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full" to="/dashboard/customers">
            {" "}
            <FaPeopleLine /> Customers
          </Link>
        </li>
        <hr className="bg-blue-100 h-1" />
        {/* <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full" to="/dashboard/profile">
            {" "}
            <BsPeople /> User Profile
          </Link>
        </li>
        <hr className="bg-blue-100 h-1" /> */}
        <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full" to="/dashboard/paymentHistory">
            {" "}
            <MdPayment /> My Payment History
          </Link>
        </li>
        <hr className="bg-blue-100 h-1" />

        <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
          <Link className="w-full h-full" to="/">
            {" "}
            <BsShop /> Home
          </Link>
        </li>
        <hr className="bg-blue-100 h-1" />

        <Link to={'/'}> <img src={logo} alt="logo" className="w-1/2 rounded-full mx-auto" /></Link>
      </ul>

  );
}

export default DashboardSideBar;
