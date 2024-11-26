import  { useState } from "react";
import PropTypes from "prop-types";

const GreetingForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [message, setMessage] = useState(initialData?.message || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, message });
    setTitle("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        {initialData ? "Update Greeting" : "Create Greeting"}
      </button>
    </form>
  );
};

// PropTypes validation
GreetingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // Ensures 'onSubmit' is a required function
  initialData: PropTypes.shape({
    title: PropTypes.string, // Optional string for 'title'
    message: PropTypes.string, // Optional string for 'message'
  }), // Ensures 'initialData' is an object with specific keys
};

export default GreetingForm;
