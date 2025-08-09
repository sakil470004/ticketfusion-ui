import { Link } from "react-router-dom";
import cover from "../../assets/cover.png";

export default function Cover() {
  return (
    <div className="grid md:grid-cols-2 items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 px-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-extrabold leading-tight">
          You dream it.
          <br /> We&apos;ll ticket it.
        </h1>
        <p className="text-lg">
          Whether it&apos;s your first event ever, or your biggest event yet, we make
          it simple to sell tickets.
        </p>
        <Link
          to={'/dashboard/add-event'}
          className="btn bg-white text-blue-900 text-lg font-bold py-3 px-6 rounded-lg hover:bg-gray-100"
        >
          Create Your Event
        </Link>
      </div>
      <div className="flex justify-center">
        <img src={cover} alt="Create your event" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
