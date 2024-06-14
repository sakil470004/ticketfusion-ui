import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function EditEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const navigation = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, [id]);

  const handleEdit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
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
    };
    try {
      const response = await fetch(`http://localhost:5000/events/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Event updated successfully");
        navigation(`/dashboard/events`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error:", error);
    }
  };

  return (
    <div className="py-8 md:py-10 px-4 bg-cover bg-center">
      <span className="text-2xl border-b-4 border-b-sky-600 text-sky-400 md:text-3xl font-semibold uppercase">
        Update Event
      </span>
      <div className="mt-8 ">
        <form onSubmit={handleEdit} className="grid md:grid-cols-4 gap-6">
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
              defaultValue={event?.eventName}
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
              defaultValue={event?.eventDate}
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
              defaultValue={event?.eventTime}
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
              defaultValue={event?.venue?.name}
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
              defaultValue={event?.venue?.address}
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
              defaultValue={event?.img}
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
              defaultValue={event?.description}
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
              defaultValue={event.price}
            />
          </div>
          <div className=" md:col-span-4 w-full flex  justify-center">
            <button
              type="submit"
              className="w-full md:w-1/2  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Update Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEvent;
