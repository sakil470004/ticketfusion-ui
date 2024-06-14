import { Link } from "react-router-dom";
import cover from "../../assets/cover.png";
export default function Cover() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="flex flex-col gap-5  md:gap-8 items-start justify-center">
        <h1 className="text-4xl md:text-5xl font-semibold leading-loose tracking-widest">
          You dream it.
          <br /> We’ll ticket it.
        </h1>
        <p className="text-xl md:text-2xl">
          Whether it’s your first event ever, or your biggest event yet, we make
          it simple to sell tickets.
        </p>
        <Link to={'/dashboard/add-event'} className="btn text-white bg-blue-900 text-xl hover:bg-blue-800">
          Create Your Event
        </Link>
      </div>
      <div>
        <img src={cover} alt="create your event" />
      </div>
    </div>
  );
}
