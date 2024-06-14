import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgAdd } from "react-icons/cg";

import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";
import toast from "react-hot-toast";
import MyBookingCard from "./MyBookingCard";
import useAuth from "../../hooks/useAuth";

function MyBooking() {
  const [events, setEvents] = useState([]);
  const { isEmpty } = useFunction();
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://ticketfusion-server.vercel.app/filterByEmail/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        setEvents(data);
      });
  }, [user.email]);
  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    fetch(`https://ticketfusion-server.vercel.app/sitBook/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(events.filter((event) => event._id !== id));
        toast.success("Event Booking Delete successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Error:", error);
      });
  };
  if (isEmpty(events)) {
    return <LoadingSpinner />;
  }

  return (
    <div className="py-8 md:py-10 px-4 bg-cover bg-center">
      <div className="flex justify-between items-end">
        <span className="text-2xl border-b-4 border-b-sky-600 text-sky-400 md:text-3xl font-semibold uppercase">
          My Booking Events
        </span>
      </div>
      <div className="grid md:grid-cols-3 mt-8 gap-5">
        {events.map((event) => (
          <MyBookingCard
            handleDelete={handleDelete}
            key={event._id}
            event={event}
          />
        ))}
      </div>
    </div>
  );
}

export default MyBooking;
