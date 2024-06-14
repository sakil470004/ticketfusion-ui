import { Link } from "react-router-dom";
import GetStatedImg from "../../assets/get-stated-photo.jpg"
export default function GetStated() {
  return (
    <div className="grid md:grid-cols-2 gap-5 my-10  border-l-4 border-l-sky-200">
      <div>
        <img className="mask mask-triangle-4" src={GetStatedImg} alt="create your event" />
      </div>
      <div className="flex flex-col gap-5  md:gap-8 items-start justify-center">
        <h1 className="text-4xl md:text-5xl font-semibold leading-loose tracking-widest">
          Get started
        </h1>
        <p className="text-xl md:text-2xl">
          It’s free to set up an account. And the first 5 tickets are on us, to
          help get you started! Prefer a demo call with one of our team? No
          problem.
        </p>
        <div className="flex gap-5">
        <Link to={'/dashboard/add-event'} className="btn text-white bg-blue-900 text-xl hover:bg-blue-800">
          Create Your Event
        </Link>
          <button className="btn text-blue-900 bg-white text-xl hover:bg-gray-100">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
}
