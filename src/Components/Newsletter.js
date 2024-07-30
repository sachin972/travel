import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-1/2 mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        OUTDOORNEWSLETTER
      </h2>
      <p className="text-gray-600 mb-6">
        Discover more of what you love and receive updates on new trips and
        promotions.
      </p>
      <form onSubmit={handleSubscribe} className="justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
