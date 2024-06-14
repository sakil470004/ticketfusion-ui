import { useState } from "react";
import DiscoverEventCard from "./DiscoverEventCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function DiscoverEvent() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://ticketfusion-server.vercel.app/events")
      .then((res) => res.json())
      .then((data) => {
        const shuffleArray = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };

        // Set shuffled rows
        setEvents(shuffleArray(data)?.slice(0, 4));
      });
  }, []);

  return (
    <div className="py-8 md:py-10  bg-cover bg-center">
      <div className="flex justify-between items-end">
        <div className="">
          <span className="text-2xl border-b-4 border-b-sky-600 text-sky-400 md:text-3xl font-semibold uppercase">
            Discover Live Events
          </span>
          <p className="text-xl mt-5  font-semibold">
            Take a peek at some amazing events using Ticket Tailor.
          </p>
        </div>
        <Link
          to={"/events"}
          className="btn text-xl  text-white bg-blue-900  border-b-4  hover:border-b-blue-900 hover:bg-blue-700 "
        >
          Discover More
        </Link>
      </div>
      <div className="grid md:grid-cols-4 mt-8 gap-5">
        {events.map((event) => (
          <DiscoverEventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default DiscoverEvent;
