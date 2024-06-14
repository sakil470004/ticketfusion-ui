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
  console.log(event);
  
  return (
    <div className="py-8 md:py-10 px-4 bg-cover bg-center h-[calc(100%-200px)]">
      <div className="flex justify-between items-end">
        <span className="text-2xl border-b-4 border-b-sky-600 text-sky-400 md:text-3xl font-semibold uppercase">
          Show Booking
        </span>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-gray-800">
            Event Name: {event?.eventName}
          </span>
        </div>
        <div className="mt-4">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-200">Email</th>
                <th className="px-4 py-2 bg-gray-200">Phone</th>
                <th className="px-4 py-2 bg-gray-200">Ticket</th>
                <th className="px-4 py-2 bg-gray-200">Cost</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((book) => (
                <tr key={book._id}>
                  
                  <td className="border px-4 py-2 text-center">{book.email}</td>
                  <td className="border px-4 py-2 text-center">{book.phone||"N/A"}</td>
                  <td className="border text-center px-4 py-2">{book.ticketNumber}</td>
                  <td className="border text-center px-4 py-2">$ {book.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-sky-400 text-white rounded-md"
          >
            Print
          </button>
          </div>
          </div>

    </div>
  );
}

export default ShowBooking;
