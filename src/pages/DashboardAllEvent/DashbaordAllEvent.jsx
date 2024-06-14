import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgAdd } from "react-icons/cg";
import DashboardAllEventCard from "./DashboardAllEventCard";
import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";
import toast from "react-hot-toast";

function DashboardAllEvent() {
  const [events, setEvents] = useState([]);
  const { isEmpty } = useFunction();
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        setEvents(data);
      });
  }, []);
  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:5000/events/${id}`, {
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
        toast.success("Event deleted successfully");
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
        <div className="">
          <span className="text-2xl border-b-4 border-b-sky-600 text-sky-400 md:text-3xl font-semibold uppercase">
            All Of Your Events
          </span>
        </div>
        <Link
          to={"/dashboard/add-event"}
          className="btn text-xl  text-white bg-blue-900  border-b-4  hover:border-b-blue-900 hover:bg-blue-700 flex items-center justify-center"
        >
          Create New Event <CgAdd />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 mt-8 gap-5">
        {events.map((event) => (
          <DashboardAllEventCard
            handleDelete={handleDelete}
            key={event.id}
            event={event}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardAllEvent;
