import { useEffect, useState } from "react";

function Comments({comments }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (index) => {
    const nextIndex = (index + 1) % 4;
    setCurrentIndex(nextIndex);
  };
  const handlePrev = (index) => {
    const prevIndex = (index - 1 + 4) % 4;
    setCurrentIndex(prevIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(currentIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="py-8 md:py-10  bg-cover bg-center">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-600">
          See Our Clients&apos; Comments
        </h2>
        <p className="text-lg text-gray-600">
          What our clients are saying about us
        </p>
      </div>

      <div className=" w-full overflow-hidden my-8">
        {comments.map((comment, index) => (
          <div key={index}>
            <div
              className={`group relative w-full  justify-center items-center  ${
                index === currentIndex ? "flex" : "hidden"
              }`}
            >
              <div className="grid md:grid-cols-3 items-center gap-6 p-4  ">
                <img
                  src={comment?.img}
                  className="w-full object-cover h-[250px] m-auto rounded-lg group-hover:transform group-hover:scale-105 transition-all  duration-700"
                  alt="Ticket Fusion Image"
                />
                <div className="md:col-span-2 ">
                  <div className="flex md:px-4 md:gap-2">
                    <span className="text-6xl">{`"`}</span>{" "}
                    <span className="text-2xl md:text-4xl mt-2">
                      {comment?.description}
                    </span>
                    <span className="text-6xl">{`"`}</span>
                  </div>
                  <h1 className="text-xl font-semibold mt-4 px-6">
                    {comment?.name}
                  </h1>
                  <p className="text-gray-500 mt-2 px-6">
                    From {comment?.eventName}
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button
                  onClick={() => handleNext(index)}
                  className="btn btn-circle"
                >
                  ❮
                </button>
                <button
                  onClick={() => handlePrev(index)}
                  className="btn btn-circle"
                >
                  ❯
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
