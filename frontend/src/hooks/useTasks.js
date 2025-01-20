import { useState, useEffect } from "react";

const useTasks = () => {
  const [columns, setColumns] = useState({
    pending: [],
    completed: [],
    done: [],
  });

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage (or use a different method)
      if (!token) {
        console.error("Authorization token is missing.");
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/tasks/tasks`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Pass the Bearer token in the Authorization header
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch tasks: ${response.statusText}`);
      }

      const tasks = await response.json();

      // Group tasks by status
      const groupedTasks = {
        pending: tasks.filter(
          (task) => task.status.toLowerCase() === "pending"
        ),
        completed: tasks.filter(
          (task) => task.status.toLowerCase() === "completed"
        ),
        done: tasks.filter((task) => task.status.toLowerCase() === "done"),
      };

      setColumns(groupedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Fetch tasks when the hook is first used
  useEffect(() => {
    fetchTasks(); // Automatically fetch tasks on first render
  }, []);

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      if (!token) {
        console.error("Authorization token is missing.");
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/tasks/tasks/${taskId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`, // Pass the Bearer token in the Authorization header
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update task status: ${response.statusText}`);
      }

      console.log(`Task ${taskId} updated to ${newStatus}`);
    } catch (error) {
      console.error("Failed to update task status:", error);
    }
  };

  return { columns, setColumns, updateTaskStatus };
};

export default useTasks;
