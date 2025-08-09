import React from 'react';

const About = () => {
  return (
    <div className="about-page bg-gray-100 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">About TicketFusion</h1>
        <p className="text-lg mb-6">
          Welcome to <span className="font-semibold">TicketFusion</span>, your ultimate platform for seamless event management and ticketing solutions. Whether you&apos;re hosting a corporate event, a concert, or a community gathering, we provide the tools you need to make it a success.
        </p>
        <p className="text-lg mb-6">
          At TicketFusion, we believe in empowering businesses and individuals to create memorable experiences. Our platform is free for companies to manage their events, sell tickets, and engage with their audience effortlessly.
        </p>
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-left">
            <li className="mb-2">Free event management tools for companies and organizations.</li>
            <li className="mb-2">User-friendly interface for creating and managing events.</li>
            <li className="mb-2">Secure and reliable ticketing system.</li>
            <li className="mb-2">Comprehensive analytics to track your event&apos;s performance.</li>
          </ul>
        </div>
        <p className="text-lg mt-6">
          Join us today and take the hassle out of event management. Let TicketFusion be your trusted partner in creating unforgettable events.
        </p>
      </div>
    </div>
  );
};

export default About;
