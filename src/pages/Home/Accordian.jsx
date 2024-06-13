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
    <div className="py-8 md:py-10  bg-cover bg-center">
    <div className="">
      <span className="text-2xl border-b-4 border-b-sky-600 text-sky-400 md:text-3xl font-semibold uppercase">
     Got Questions? We Have Answers
      </span>
    </div>
      <div className="mt-6 flex flex-col gap-5 border-l-4 pl-3 border-l-sky-200">
        {faqArray.map((faq) => (
          <div
            className="collapse collapse-arrow bg-gray-50 shadow-sm border-2 border-sky-100"
            key={faq.id}
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content border-b-2 border-sky-200">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
