import { Helmet } from "react-helmet-async";

const Support = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <Helmet>
        <title>Support || Gadget Heaven</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Support & FAQs</h1>

      {/* FAQ Section */}
      <div className="p-5 rounded-lg shadow-md bg-purple-600 text-white text-center py-6">
        <h2 className="text-xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          <details className="bg-white p-3 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-medium text-black">
              How do I track my order?
            </summary>
            <p className="text-gray-700 mt-2">
              Go to the `Orders` page to check your order status.
            </p>
          </details>

          <details className="bg-white p-3 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-medium text-black">
              What is the refund policy?
            </summary>
            <p className="text-gray-700 mt-2">
              Refunds are available within 14 days of purchase.
            </p>
          </details>

          <details className="bg-white p-3 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-medium text-black">
              How do I contact support?
            </summary>
            <p className="text-gray-700 mt-2">
              Use the contact form below to reach us.
            </p>
          </details>
        </div>
      </div>

      {/* Contact Support Form */}
      <div className="mt-6 p-5 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
