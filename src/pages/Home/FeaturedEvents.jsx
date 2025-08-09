const FeaturedEvents = () => {
  const events = [
    {
      title: "Music Fest 2025",
      date: "August 20, 2025",
      location: "New York City",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFm1v1dWdmf81aHzlqw9OK1CYPzFEIFyXOw&s",
    },
    {
      title: "Tech Conference 2025",
      date: "September 15, 2025",
      location: "San Francisco",
      image: "https://media.bitcot.com/wp-content/uploads/2025/02/Tech-Conferences-in-2025-1.jpg",
    },
    {
      title: "Art Expo 2025",
      date: "October 10, 2025",
      location: "Los Angeles",
      image: "https://www.artnews.com/wp-content/uploads/2025/02/J1_2606.jpg?w=1200",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="text-gray-600">{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
