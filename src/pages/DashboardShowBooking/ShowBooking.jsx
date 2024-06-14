import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowBooking() {
  const { id } = useParams();
  const [booking, setBooking] = useState([]);
  const [event, setEvent] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/filterByEventID/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, [id]);
  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, [id]);
  
  return (
    <div className="py-8 md:py-10 px-4 bg-cover bg-center">
      <div className="flex justify-between items-end">
        <span className="text-2xl border-b-4 border-b-sky-600 text-sky-400 md:text-3xl font-semibold uppercase">
          Show Booking
        </span>
      </div>
    </div>
  );
}

export default ShowBooking;
