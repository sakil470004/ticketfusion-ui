import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function MyBookingCard({ event ,handleDelete}) {
  
  const navigation = useNavigate();
  // todo: need change the path to the event related table page
  const handleDetails = () => {
    navigation(`/events/${event.eventId}`);
  };
  const imgHolder =
    "https://www.thedigitalbridges.com/wp-content/uploads/2018/02/tech-conference-768x498.jpg";
  return (
    <div
      
      className="group card card-compact  bg-base-100 shadow-xl rounded-lg border border-white  hover:border-gray-400 transition-all duration-300 relative"
     >
     <Link to={`/dashboard/showbooking/${event?.eventId}`} className="badge top-4 right-4 absolute badge-md badge-accent z-30 text-white font-bold">Guest List</Link>
      <div className="justify-center items-center  transition-all duration-700 overflow-hidden">
        <img
          className="object-cover  max-h-full  m-auto rounded-lg group-hover:scale-105 w-full md:h-[250px] group-hover:transform group-hover:duration-700"
          src={event?.img || imgHolder}
          alt="Shoes"
        />
      </div>
      <div className="card-body">
        <h2 onClick={handleDetails} className="cursor-pointer card-title">{event?.eventName}</h2>
        <p className="flex text-red-500 gap-1 items-center">
          <MdOutlineDateRange /> {event?.eventDate} - {event?.eventTime}
        </p>
        <p className="flex gap-1 items-center line">
          <CiLocationOn /> {(event?.venue?.address).slice(0, 30)}....
        </p>
        <p className="text-lg font-semibold">{event?.ticketNumber} Ticket Booked --- Cost ${event?.price}</p>
     
        <div className="flex justify-between items-center mt-2">
          <Link
            to={`/events/${event?.eventId}`}
            className="btn btn-xs bg-sky-500 text-white btn-outline "
          >
            See Details
          </Link>
      {
        event?.price >0 && <Link to={`/dashboard/payment/${event?._id}`} className="btn btn-xs px-4 btn-warning text-white ">Pay</Link>
      }
          <button
            onClick={() => handleDelete(event?._id)}
            className="btn font-bold  btn-error btn-outline btn-xs"
          >
            Delete
          </button>
        </div>
      
      </div>
    
    </div>
  );
}

export default MyBookingCard;
