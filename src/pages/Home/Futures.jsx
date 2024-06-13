import futureImage from "../../assets/feature.webp"
export default function Futures() {
  return (
    <div className="grid md:grid-cols-2 gap-5 my-10 border-r-4 border-r-sky-200">
      
      <div className="flex flex-col gap-5  md:gap-8 items-start justify-center">
        <h1 className="text-4xl md:text-5xl font-semibold leading-loose tracking-widest">
        Features at your 
        <br />
        fingertips
        </h1>
        <p className="text-xl md:text-2xl">
        You have access to all of our features, whatever size your event, free or paid tickets.


        </p>
        <div className="flex gap-5">
          
          <button className="btn text-blue-900 bg-white text-xl hover:bg-gray-100">
           See  Features
          </button>
        </div>
      </div>
      <div>
        <img className="mask mask-hexagon-2" src={futureImage} alt="create your event" />
      </div>
    </div>
  );
}
