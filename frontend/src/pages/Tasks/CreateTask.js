import React, { useState } from "react";
import useCreateTask from "../../hooks/useCreateTask"; // Importing the custom hook

const CreateTask = ({ onTaskCreated }) => {
  const [name, setName] = useState(""); // Task name state
  const [description, setDescription] = useState(""); // Task description state

  const { handleCreateTask, isLoading, error } = useCreateTask(); // Using the custom hook

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Get the token from localStorage

    if (!token) {
      alert("User is not authenticated!");
      return;
    }

    try {
      const response = await handleCreateTask(name, description, token); // Using the hook to create task
      onTaskCreated(response); // Notify the parent component that the task is created
      setName(""); // Reset name after submission
      setDescription(""); // Reset description after submission
    } catch (err) {
      alert("Failed to create task");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-8">
      <h2 className="text-xl font-bold mb-6">Create Task</h2>

      <input
        type="text"
        placeholder="Enter task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out shadow-md"
      />
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out shadow-md"
      />

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-500 text-white w-full py-2 rounded-md mt-4"
        disabled={isLoading} // Disable the button when loading
      >
        {isLoading ? "Creating Task..." : "Create Task"}
      </button>
    </div>
  );
};

export default CreateTask;
