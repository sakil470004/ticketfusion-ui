const Accordion = () => {
  const faqArray = [
    {
      id: 1,
      question: "Can I sell my event tickets on Ticket Fusion?",
      answer:
        "Yes, you can list your event tickets for sale on Ticket Fusion. Simply create an account and follow the instructions to list your tickets.",
    },
    {
      id: 2,
      question: "How do I buy tickets on Ticket Fusion?",
      answer:
        "To buy tickets, browse the events on our website, select the tickets you want, and proceed to checkout to complete your purchase.",
    },
    {
      id: 3,
      question: "What payment methods are accepted?",
      answer:
        "We accept major credit cards, debit cards, and PayPal for ticket purchases.",
    },
    {
      id: 4,
      question: "Can I get a refund for my tickets?",
      answer:
        "Refunds are available for certain events. Please check the event’s refund policy or contact our support team for assistance.",
    },
    {
      id: 5,
      question: "How do I receive my tickets after purchase?",
      answer:
        "After completing your purchase, your tickets will be emailed to you. You can also access them through your Ticket Fusion account.",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-600">
          Got Questions? We Have Answers
        </h2>
        <p className="text-lg text-gray-600">
          Find answers to the most frequently asked questions below.
        </p>
      </div>
      <div className=" mx-auto space-y-4">
        {faqArray.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
