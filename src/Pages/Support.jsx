import { Helmet } from "react-helmet-async";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

const faqs = [
  {
    q: "How long does delivery usually take?",
    a: "Standard delivery takes 3–5 business days. Express shipping options are also available at checkout.",
  },
  {
    q: "Can I return a product if I don’t like it?",
    a: "Absolutely! You can return products within 14 days of delivery for a full refund or replacement, provided it’s in original condition.",
  },
  {
    q: "Do your products come with a warranty?",
    a: "Yes, most of our gadgets include a 1-year warranty covering manufacturing defects.",
  },
  {
    q: "How can I contact customer support directly?",
    a: "You can use the contact form below or email us at support@gadgetheaven.com. We usually respond within 24 hours.",
  },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Helmet>
        <title>Support || Gadget Heaven</title>
      </Helmet>

      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800">
        Support & <span className="text-purple-600">FAQs</span>
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Got a question? We’ve got answers! Our team is always here to help you
        out.
      </p>

      {/* FAQ Section */}
      <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/90 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center font-semibold text-purple-700 focus:outline-none"
              >
                {faq.q}
                <span
                  className={`transform transition-transform ${
                    openIndex === index
                      ? "rotate-45 text-purple-600"
                      : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support Form */}
      <div className="mt-10 p-8 bg-white shadow-xl rounded-2xl">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 text-center">
          Contact <span className="text-purple-600">Support</span>
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Fill out the form below & our team will reach out as soon as possible.
        </p>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          ></textarea>
          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-800 transition">
            <FiSend size={18} /> Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
