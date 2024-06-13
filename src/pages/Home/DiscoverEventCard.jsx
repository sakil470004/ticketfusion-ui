import { CiLocationOn } from "react-icons/ci"
import { MdOutlineDateRange } from "react-icons/md"

function DiscoverEventCard({event}) {
  
  return (
    <div className="group card  card-compact  bg-base-100 shadow-xl rounded-lg border border-white  hover:border-gray-400 transition-all duration-300">
      <div className="   justify-center items-center  transition-all duration-700 overflow-hidden">
        <img
          className="object-cover  max-h-full  m-auto rounded-lg group-hover:scale-105 w-full md:h-[250px] group-hover:transform group-hover:duration-700"
          src={event?.img}
          alt="Shoes"
        />
      </div>
    <div className="card-body">
      <h2 className="card-title">{event?.eventName}</h2>
      <p className="flex text-red-500 gap-1 items-center"><MdOutlineDateRange/> {event?.eventDate} - {event?.eventTime}</p>
   <p className="flex gap-1 items-center line"><CiLocationOn/> {(event?.venue?.address).slice(0,30)}....</p>
    </div>
  </div>
  )
}

export default DiscoverEventCard