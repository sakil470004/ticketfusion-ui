const PartnersClients = () => {
  const partners = [
    { name: "Partner A", logo: "https://media.istockphoto.com/id/531725153/photo/fire-letter-on-black-background.jpg?s=612x612&w=0&k=20&c=uc3V5IA_0N3uVw6Xt0zbAn13YKh8NW88voNqbhzz0zQ=" },
    { name: "Partner B", logo: "https://media.istockphoto.com/id/531725257/photo/fire-letter-on-black-background.jpg?s=612x612&w=0&k=20&c=Ar6ZGy50d5LYw5rQD4gZl_Nji-qj_OWZAuy3eWyB2So=" },
    { name: "Partner C", logo: "https://media.istockphoto.com/id/178592315/photo/flamy-symbol.jpg?s=612x612&w=0&k=20&c=xL3W1154ntLKXZXrfsn2Qes6fAYOGEzy5PcDw86bjVE=" },
    { name: "Partner D", logo: "https://www.shutterstock.com/image-illustration/fiery-font-letter-d-600nw-6764185.jpg" },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Partners & Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 mx-auto mb-2"
              />
              <p className="text-gray-600">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersClients;
