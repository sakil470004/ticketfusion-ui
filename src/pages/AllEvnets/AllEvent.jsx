import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CgAdd } from "react-icons/cg"
import AllEventsCard from "./AllEventsCard"

function AllEvent() {
    const [events,setEvents] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/events")
        .then((res) => res.json())
        .then((data) => {
            setEvents(data)
        })
    }, [])
  return (
    <div className="py-8 md:py-10 px-6 bg-cover bg-center">
    <div className="flex justify-between items-end">
      <div className="">
      <span className="text-2xl border-b-4 border-b-sky-600 text-sky-400 md:text-3xl font-semibold uppercase">
      Explore Our Events
        </span>
        <p className="text-xl mt-5  font-semibold">
         Here is list of all events. Take a look Or Create A new Events
        </p>
      </div>
      <Link to={"/events"} className="btn text-xl  text-white bg-blue-900  border-b-4  hover:border-b-blue-900 hover:bg-blue-700 flex items-center justify-center">
          Create New Event <CgAdd/>
        </Link>
    </div>
    <div className="grid md:grid-cols-4 mt-8 gap-5">
{
      events.map((event) => (
        <AllEventsCard key={event.id} event={event} />
      ))
}
    </div>
  </div>
  )
}

export default AllEvent