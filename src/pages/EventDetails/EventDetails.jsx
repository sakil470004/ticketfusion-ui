import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { useParams } from "react-router-dom";
import DiscoverEvent from "../Home/DiscoverEvent";
import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";

function EventDetails() {
  const { id } = useParams();
  const {isEmpty} = useFunction();
  const imgHolder =
    "https://www.thedigitalbridges.com/wp-content/uploads/2018/02/tech-conference-768x498.jpg";
  const [event, setEvent] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, [id]);
  if(isEmpty(event))
    return<LoadingSpinner/>


  return (
    <div className="px-6">
      <div className="group bg-detailsBg w-full bg-cover rounded-md bg-center">
        <div className="py-10 flex justify-center items-center">
          <div className="bg-base-100 rounded-lg   md:w-1/2  transition-all duration-300">
            <div className="justify-center items-center transition-all duration-700 w-full overflow-hidden">
              <img
                className="group-hover:scale-105 object-cover max-h-full transition-all duration-700 m-auto rounded-lg w-full md:min-h-[250px]"
                src={event?.img || imgHolder}
                alt="Event"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 md:gap-16 gap-5">
        <div className="mt-4 md:col-span-2">
          
          <h2 className="text-5xl font-semibold my-4">{event?.eventName}</h2>
          {event?.description && (
            <>
              <p className="flex text-2xl font-semibold mt-6 mb-4 gap-1 items-center">
                Description
              </p>
              <p>{event?.description}</p>
            </>
          )}
          <p className="flex text-2xl font-semibold mt-6 mb-4 gap-1 items-center">
                Date and Time
              </p>
              <p className="flex text-xl text-red-500 gap-1 items-center">
            <MdOutlineDateRange /> {event?.eventDate} - {event?.eventTime}
          </p>
          <p className="flex text-2xl font-semibold mt-6 mb-4 gap-1 items-center">
            Location
          </p>
          <p className="flex gap-1 items-center">
            <CiLocationOn /> {event?.venue?.address}
          </p>
          <p className="flex text-2xl font-semibold mt-6 mb-4 gap-1 items-center">
            Organizer Info
          </p>
          <div className="bg-slate-200 shadow-lg p-8 text-xl max-w-sm">
            <p>Name: {event?.organizerName}</p>
            <p>Contact: {event?.organizerEmail}</p>
          </div>
        </div>
        <div>
          <div className="card  bg-base-100 shadow-xl rounded-lg border  border-white hover:border-gray-400 mt-6 transition-all duration-300 relative">
          <button className="badge badge-warning text-md font-bold p-3 uppercase  absolute -top-2 -right-4 text-white">{event?.ticketType}</button>
            <div className="card-body">
              <h2 className="card-title">Event Details</h2>
              <p className="flex text-red-500 gap-1 items-center">
                <MdOutlineDateRange /> {event?.eventDate} - {event?.eventTime}
              </p>
              <p className="flex gap-1 items-center">
                <CiLocationOn /> {event?.venue?.address}
              </p>
              <h2 className="text-xl text-yellow-600">Price: ${event?.price}</h2>
              <button className="btn text-xl text-white bg-blue-900 border-b-4 hover:border-b-blue-900 hover:bg-blue-700">
                Book Now
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
