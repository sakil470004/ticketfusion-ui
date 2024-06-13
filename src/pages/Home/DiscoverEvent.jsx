import { useState } from "react";
import DiscoverEventCard from "./DiscoverEventCard";
import { useEffect } from "react";

function DiscoverEvent() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        const newData= data.reverse()
        setEvents(newData.slice(0, 4));
      });
  }, []);

  return (
    <div className="py-8 md:py-10  bg-cover bg-center">
      <div className="flex justify-between items-end">
        <div className="">
          <h1 className="text-2xl text-sky-400 md:text-3xl font-semibold">
            Discover live events
          </h1>
          <p className="text-xl mt-5  font-semibold">
            Take a peek at some amazing events using Ticket Tailor.
          </p>
        </div>
        <button className="btn text-xl  text-white bg-blue-900  border-b-4  hover:border-b-blue-900 hover:bg-blue-700 ">
          Discover More
        </button>
      </div>
      <div className="grid md:grid-cols-4 mt-8 gap-5">
{
        events.map((event) => (
          <DiscoverEventCard key={event.id} event={event} />
        ))
}
      </div>
    </div>
  );
}

export default DiscoverEvent;
