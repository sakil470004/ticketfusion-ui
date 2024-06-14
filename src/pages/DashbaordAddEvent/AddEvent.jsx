import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function AddEvent() {
  const { user } = useAuth();
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData(e.target);
    const ticketType = formData.get("price") == 0 ? "Free" : "Paid";
    const data = {
      eventName: formData.get("eventName"),
      eventDate: formData.get("eventDate"),
      eventTime: formData.get("eventTime"),
      venue: {
        name: formData.get("venue-name"),
        address: formData.get("venue-address"),
      },
      img: formData.get("img"),
      description: formData.get("description"),
      price: formData.get("price"),
      ticketType: ticketType,
      organizerName: formData.get("organizerName"),
      organizerEmail: formData.get("organizerEmail"),
      totalTicket: formData.get("totalTicket"),
      addedBy: user?.email,
    };
    try {
      const response = await fetch("https://ticketfusion-server.vercel.app/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Event added successfully");
        navigation(`/dashboard/events`);
      
      }
    } catch (error) {
      toast.error("Error:", error);
    }
  };

  return (
    <div className="py-8 md:py-10 px-4 bg-cover bg-center">
      <span className="text-2xl border-b-4 border-b-sky-600 text-sky-400 md:text-3xl font-semibold uppercase">
        Add New Event
      </span>

      <div className="mt-8 ">
        <form onSubmit={handleSubmit} className="grid md:grid-cols-4 gap-6">
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="event-name"
              className="block text-sm font-medium text-gray-700"
            >
              Event Name
            </label>
            <input
              required
              type="text"
              name="eventName"
              id="event-name"
              autoComplete="given-name"
              className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-blue-300 border rounded-md px-4 py-2"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="event-date"
              className="block text-sm font-medium text-gray-700"
            >
              Event Date
            </label>
            <input
              required
              type="date"
              name="eventDate"
              //   disable past date
              min={new Date().toISOString().split("T")[0]}
              id="event-date"
              autoComplete="given-name"
              className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-blue-300 border rounded-md px-4 py-2"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="event-time"
              className="block text-sm font-medium text-gray-700"
            >
              Event Time
            </label>
            <input
              required
              type="time"
              name="eventTime"
              id="event-time"
              autoComplete="given-name"
              className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-blue-300 border rounded-md px-4 py-2"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="venue-name"
              className="block text-sm font-medium text-gray-700"
            >
              Venue Name
            </label>
            <input
              required
              type="text"
              name="venue-name"
              id="venue-name"
              autoComplete="given-name"
              className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-blue-300 border rounded-md px-4 py-2"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label
              required
              htmlFor="venue-address"
              className="block text-sm font-medium text-gray-700"
            >
              Venue Address
            </label>
            <input
              required
              type="text"
              name="venue-address"
              id="venue-address"
              autoComplete="given-name"
              className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-blue-300 border rounded-md px-4 py-2"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="event-img"
              className="block text-sm font-medium text-gray-700"
            >
              Event Image
            </label>
            <input
              required
              type="url"
              name="img"
              id="event-img"
              autoComplete="given-name"
              className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-blue-300 border rounded-md px-4 py-2"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              required
              name="description"
              id="description"
              autoComplete="given-name"
              className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-blue-300 border rounded-md px-4 py-2"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              required
              type="number"
              name="price"
              id="price"
              autoComplete="given-name"
              className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-blue-300 border rounded-md px-4 py-2"
            />
          </div>

          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="organizer-name"
              className="block text-sm font-medium text-gray-700"
            >
              Organizer Name
            </label>
            <input
              type="text"
              name="organizerName"
              id="organizer-name"
              autoComplete="given-name"
              className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-blue-300 border rounded-md px-4 py-2"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="organizer-email"
              className="block text-sm font-medium text-gray-700"
            >
              Organizer Email
            </label>
            <input
              type="email"
              name="organizerEmail"
              id="organizer-email"
              autoComplete="given-name"
              className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-blue-300 border rounded-md px-4 py-2"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="total-ticket"
              className="block text-sm font-medium text-gray-700"
            >
              Total Ticket
            </label>
            <input
              type="number"
              name="totalTicket"
              id="total-ticket"
              autoComplete="given-name"
              className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-blue-300 border rounded-md px-4 py-2"
            />
          </div>
          <div className=" md:col-span-4 w-full flex  justify-center">
            <button
              type="submit"
              className="w-full md:w-1/2  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;
