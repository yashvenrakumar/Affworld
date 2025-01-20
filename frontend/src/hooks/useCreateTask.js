import { useState } from "react";
import axios from "axios";

const useCreateTask = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateTask = async (name, description, token) => {
    setIsLoading(true);
    setError(null); // Reset error state on new request

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/tasks/tasks`,
        { name, description },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in the header as Bearer
          },
        }
      );

      alert("Task created successfully!");
      return response.data; // Return response data (task info)
    } catch (error) {
      console.error(
        "Error creating task:",
        error.response?.data || error.message
      );
      setError(
        error.response?.data?.message ||
          "An error occurred while creating the task."
      );
      alert("Failed to create task. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetTask = async (token) => {
    setIsLoading(true);
    setError(null); // Reset error state on new request

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/tasks/tasks`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in the header as Bearer
          },
        }
      );

      return response.data; // Return response data (task info)
    } catch (error) {
      console.error(
        "Error creating task:",
        error.response?.data || error.message
      );
      setError(
        error.response?.data?.message ||
          "An error occurred while creating the task."
      );
      alert("Failed to get task. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleCreateTask, handleGetTask, isLoading, error };
};

export default useCreateTask;
