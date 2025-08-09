import futureImage from "../../assets/feature.webp";

export default function Futures() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center py-12 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-extrabold leading-tight">
          Features at your <br /> fingertips
        </h2>
        <p className="text-lg">
          You have access to all of our features, whatever size your event, free or paid tickets.
        </p>
        <button className="btn bg-white text-blue-900 text-lg font-bold py-3 px-6 rounded-lg hover:bg-gray-100">
          See Features
        </button>
      </div>
      <div className="flex justify-center">
        <img
          className="rounded-lg shadow-lg"
          src={futureImage}
          alt="Features at your fingertips"
        />
      </div>
    </div>
  );
}
