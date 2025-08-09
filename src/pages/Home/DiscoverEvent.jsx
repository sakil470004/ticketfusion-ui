import { useState, useEffect } from "react";
import DiscoverEventCard from "./DiscoverEventCard";
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

        setEvents(shuffleArray(data)?.slice(0, 4));
      });
  }, []);

  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-600">
          Discover Live Events
        </h2>
        <p className="text-lg text-gray-600">
          Take a peek at some amazing events using Ticket Tailor.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {events.map((event) => (
          <DiscoverEventCard key={event.id} event={event} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to={"/events"}
          className="btn bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-blue-700"
        >
          Discover More
        </Link>
      </div>
    </div>
  );
}

export default DiscoverEvent;
