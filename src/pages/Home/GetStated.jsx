import { Link } from "react-router-dom";
import GetStatedImg from "../../assets/get-stated-photo.jpg";

export default function GetStated() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center py-12  bg-gray-100">
      <div className="flex justify-center">
        <img
          className="rounded-lg shadow-lg"
          src={GetStatedImg}
          alt="Get started"
        />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-extrabold leading-tight text-blue-600">
          Get started
        </h2>
        <p className="text-lg text-gray-700">
          It&apos;s free to set up an account. And the first 5 tickets are on us, to
          help get you started! Prefer a demo call with one of our team? No
          problem.
        </p>
        <div className="flex gap-4">
          <Link
            to={'/dashboard/add-event'}
            className="btn bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-blue-700"
          >
            Create Your Event
          </Link>
          <button className="btn bg-white text-blue-600 text-lg font-bold py-3 px-6 rounded-lg hover:bg-gray-100">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
}
