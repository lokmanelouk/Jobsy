import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
  };

  return (
    <section className="py-16 bg-[#1E293B] text-white">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl mb-8">
          Subscribe to get new worker alerts and exclusive promotions!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-md text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-md font-semibold transition"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-300">
          We'll never share your email. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter