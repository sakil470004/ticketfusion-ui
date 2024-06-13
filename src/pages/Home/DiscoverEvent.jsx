import DiscoverEventCard from "./DiscoverEventCard";

function DiscoverEvent() {
  return (
    <div className="py-8 md:py-10 bg-discover bg-cover bg-center px-4">
      <div className="flex justify-between items-end">
        <div className="">
          <h1 className="text-2xl text-white md:text-3xl font-semibold">
            Discover live events
          </h1>
          <p className="text-xl mt-5 text-white font-semibold">
            Take a peek at some amazing events using Ticket Tailor.
          </p>
        </div>
        <button className="btn text-xl  text-white bg-blue-900  border-b-4  hover:border-b-blue-900 hover:bg-blue-700 ">
          Discover More
        </button>
      </div>
      <div className="grid md:grid-cols-3">
        <DiscoverEventCard />
      </div>
    </div>
  );
}

export default DiscoverEvent;
