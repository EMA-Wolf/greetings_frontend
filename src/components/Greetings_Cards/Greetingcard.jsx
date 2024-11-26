 import PropTypes from "prop-types";

 const GreetingCard = ({ title, message, onDelete, onUpdate }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{message}</p>
      <div className="mt-4 space-x-2">
        <button
          onClick={onUpdate}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Update
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
// PropTypes validation
GreetingCard.propTypes = {
  title: PropTypes.string.isRequired, // Ensures 'title' is a required string
  message: PropTypes.string.isRequired, // Ensures 'message' is a required string
  onDelete: PropTypes.string.isRequired,
  onUpdate: PropTypes.string.isRequired,
};

export default GreetingCard;
