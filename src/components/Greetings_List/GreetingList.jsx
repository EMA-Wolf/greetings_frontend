import  { useEffect, useState } from "react";
import PropTypes from "prop-types";
import GreetingCard from "../Greetings_Cards/Greetingcard";

const GreetingList = ({ onEdit }) => {
  const [greetings, setGreetings] = useState([]);

  // Fetch the greeting cards from the server
  const fetchGreetings = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_DEPLOY_API}/greetings`);
      const data = await response.json();
      setGreetings(data);
    } catch (error) {
      console.error("Error fetching greetings:", error);
    }
  };

  useEffect(() => {
    fetchGreetings();
  }, []);

  // Handle the deletion of a greeting card
  const handleDelete = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_DEPLOY_API}/greetings/${id}`, {
        method: "DELETE",
      });
      // Refresh the list after deleting
      fetchGreetings();
    } catch (error) {
      console.error("Error deleting greeting:", error);
    }
  };

  return (
    <div className="space-y-4">
      {greetings.map((greeting) => (
        <GreetingCard
          key={greeting.id}
          title={greeting.title}
          message={greeting.message}
          onDelete={() => handleDelete(greeting.id)}
          onUpdate={() => onEdit(greeting)}
        />
      ))}
    </div>
  );
};

// PropTypes validation
GreetingList.propTypes = {
  onEdit: PropTypes.func.isRequired, // Ensures 'onEdit' is a required function
};

export default GreetingList;
