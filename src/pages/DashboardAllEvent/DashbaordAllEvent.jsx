import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgAdd } from "react-icons/cg";
import DashboardAllEventCard from "./DashboardAllEventCard";

function DashboardAllEvent() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);
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
          <DashboardAllEventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default DashboardAllEvent;
