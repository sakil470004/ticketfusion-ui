function Statistics() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-600">Our Achievements</h2>
        <p className="text-lg text-gray-600">Key metrics that define our success</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-blue-600">10,000+</h3>
          <p className="text-lg text-gray-600">Events Hosted</p>
        </div>
        <div className="text-center bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-blue-600">500,000+</h3>
          <p className="text-lg text-gray-600">Tickets Sold</p>
        </div>
        <div className="text-center bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-blue-600">50,000+</h3>
          <p className="text-lg text-gray-600">Active Users</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;