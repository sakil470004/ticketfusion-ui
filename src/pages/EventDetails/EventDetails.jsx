import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import DiscoverEvent from "../Home/DiscoverEvent";
import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

function EventDetails() {
  const { id } = useParams();
  const { isEmpty } = useFunction();
  const [currentTicket, setCurrentTicket] = useState(1);
  const [event, setEvent] = useState({});
  const [booking, setBooking] = useState({});
  const { user } = useAuth();
  const [reload, setReload] = useState(false);

  const imgHolder =
    "https://www.thedigitalbridges.com/wp-content/uploads/2018/02/tech-conference-768x498.jpg";

  const bookNow = () => {
    const token = localStorage.getItem("token");
    const booking = {
      eventName: event.eventName,
      eventDate: event.eventDate,
      eventTime: event.eventTime,
      price: event.price * currentTicket,
      ticketType: event.ticketType,
      img: event.img,
      venue: event.venue,
      organizerName: event.organizerName,
      organizerEmail: event.organizerEmail,
      ticketNumber: currentTicket,
      eventId: event?._id,
      email: user?.email,
    };
    fetch("https://ticketfusion-server.vercel.app/sitBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success(data?.message);
          setReload((prev) => !prev);
          setCurrentTicket(1);
        }
      });
  };

  useEffect(() => {
    fetch(`https://ticketfusion-server.vercel.app/sitBook/${id}/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, [user.email, id, reload]);

  useEffect(() => {
    fetch(`https://ticketfusion-server.vercel.app/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, [id]);

  if (isEmpty(event)) return <LoadingSpinner />;

  return (
    <div className="px-6">
      <div className="group bg-detailsBg w-full bg-cover rounded-md bg-center">
        <div className="py-10 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg md:w-1/2 transition-all duration-300">
            <div className="justify-center items-center transition-all duration-700 w-full overflow-hidden relative">
              <Link
                to={`/dashboard/showbooking/${event?._id}`}
                className="badge top-4 right-4 absolute badge-md badge-accent z-30 text-white font-bold"
              >
                Guest List
              </Link>
              <img
                className="group-hover:scale-105 object-cover max-h-full transition-all duration-700 m-auto rounded-lg w-full md:min-h-[250px]"
                src={event?.img || imgHolder}
                alt="Event"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 md:gap-16 gap-5 mt-8">
        <div className="md:col-span-2">
          <h2 className="text-5xl font-bold text-blue-600 mb-6">
            {event?.eventName}
          </h2>
          {event?.description && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Description
              </h3>
              <p className="text-gray-600">{event?.description}</p>
            </div>
          )}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Date and Time
            </h3>
            <p className="text-xl text-red-500 flex items-center gap-2">
              <MdOutlineDateRange /> {event?.eventDate} - {event?.eventTime}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Location
            </h3>
            <p className="text-gray-600 flex items-center gap-2">
              <CiLocationOn /> {event?.venue?.address}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Organizer Info
            </h3>
            <div className="bg-gray-100 shadow-md p-6 rounded-lg">
              <p className="text-gray-700">Name: {event?.organizerName}</p>
              <p className="text-gray-700">Contact: {event?.organizerEmail}</p>
            </div>
          </div>
        </div>
        <div>
          {/* card for old booking information */}
          {!isEmpty(booking) && (
            <div className="card bg-white shadow-lg rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-300 mb-6">
              <div className="card-body">
                <h3 className="card-title text-lg font-bold text-gray-700 mb-4">
                  Previous Booking Details
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl text-yellow-600 font-semibold">
                    Price: ${booking?.price?.toFixed(2)}
                  </p>
                  <p className="text-gray-700">Tickets: {booking?.ticketNumber}</p>
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    to={`/dashboard/booking`}
                    className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
                  >
                    See My Booking
                  </Link>
                  <Link
                    to={`/dashboard/showbooking/${event?._id}`}
                    className="btn btn-sm bg-green-500 text-white hover:bg-green-600"
                  >
                    Guest List
                  </Link>
                  <Link
                    to="/dashboard/booking"
                    className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600"
                  >
                    Pay
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div className="card bg-white shadow-lg rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-300">
            <div className="card-body relative">
              <span className="badge badge-warning text-md font-bold p-3 uppercase absolute -top-2 -right-4 text-white">
                {event?.ticketType}
              </span>
              <h3 className="card-title text-lg font-bold text-gray-700 mb-4">
                Event Details
              </h3>
              <p className="text-gray-600 flex items-center gap-2 mb-4">
                <MdOutlineDateRange /> {event?.eventDate} - {event?.eventTime}
              </p>
              <p className="text-gray-600 flex items-center gap-2 mb-4">
                <CiLocationOn /> {event?.venue?.address}
              </p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl text-yellow-600 font-semibold">
                  Price: ${(event?.price * currentTicket).toFixed(2)}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentTicket((prev) => (prev > 1 ? prev - 1 : prev))
                    }
                    className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold">{currentTicket}</span>
                  <button
                    onClick={() => setCurrentTicket((prev) => prev + 1)}
                    className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={bookNow}
                className="btn w-full bg-blue-500 text-white hover:bg-blue-600"
              >
                Book Now
              </button>
              <button
                onClick={() => {
                  const eventLink = `${window.location.origin}/events/${id}`;
                  navigator.clipboard.writeText(eventLink);
                  toast.success("Event link copied to clipboard!");
                }}
                className="btn w-full bg-green-500 text-white hover:bg-green-600 mt-4"
              >
                Share Event Link
              </button>
            </div>
          </div>
        </div>
      </div>
      <DiscoverEvent />
    </div>
  );
}

export default EventDetails;
