// src/components/FormModal.jsx
import React, { useState } from "react";

const FormModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate submitting the data to a storage (e.g., a server or local JSON)
    const formData = { name, message };

    // Log data to console (simulate storage)
    console.log("Form submitted:", formData);

    // You can save data to localStorage, a JSON file, or an API endpoint here

    // Close the modal after submission
    onClose();
  };

  return (
    <div className="bg-white/90 p-6 rounded-md shadow-md w-80">
      <h2 className="text-xl text-center font-semibold mb-4">Leave Us A Comment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Your name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Your message"
            required
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition-all"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormModal;
