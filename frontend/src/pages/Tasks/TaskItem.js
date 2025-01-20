import React from "react";
import { useDrag } from "react-dnd";
import useAuth from "../../hooks/useAuth"; // Import the custom hook
import { FaTrash } from "react-icons/fa";
const TaskItem = ({ task, columnId }) => {
  const { fetchWithAuth } = useAuth(); // Use the custom hook to get the authenticated fetch function
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        // Use fetchWithAuth to make the delete request with the Authorization header
        await fetchWithAuth(
          `${process.env.REACT_APP_API_URL}/tasks/tasks/${task._id}`,
          { method: "DELETE" }
        );
        alert("Task deleted");
      } catch (err) {
        console.error("Failed to delete task:", err);
        alert("Failed to delete task");
      }
    }
  };
  const [{ isDragging }, dragRef] = useDrag({
    type: "TASK",
    item: { id: task._id, fromColumn: columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef}
      className={`p-4 rounded-lg shadow-md mb-4 ${
        isDragging ? "opacity-50 bg-gray-200" : "bg-blue-100"
      }`}
    >
      <h3 className="font-semibold">{task.name}</h3>
      <p>{task.description}</p>

      <div className="flex justify-between items-center mt-2">
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

// import React from "react";
// import { FaTrash } from "react-icons/fa";
// import useAuth from "../../hooks/useAuth"; // Import the custom hook

// const TaskItem = ({ task, provided }) => {
// const { fetchWithAuth } = useAuth(); // Use the custom hook to get the authenticated fetch function

// const handleDelete = async () => {
//   if (window.confirm("Are you sure you want to delete this task?")) {
//     try {
//       // Use fetchWithAuth to make the delete request with the Authorization header
//       await fetchWithAuth(
//         `${process.env.REACT_APP_API_URL}/tasks/tasks/${task._id}`,
//         { method: "DELETE" }
//       );
//       alert("Task deleted");
//     } catch (err) {
//       console.error("Failed to delete task:", err);
//       alert("Failed to delete task");
//     }
//   }
// };

//   return (
//     <div
//       className="bg-blue-100 p-4 rounded-lg mb-4 shadow-md"
//       ref={provided.innerRef}
//       {...provided.draggableProps}
//       {...provided.dragHandleProps}
//     >
//       <h3 className="font-semibold">{task.name}</h3>
//       <p>{task.description}</p>
// <div className="flex justify-between items-center mt-2">
//   <button
//     onClick={handleDelete}
//     className="text-red-500 hover:text-red-700"
//   >
//     <FaTrash />
//   </button>
// </div>
//     </div>
//   );
// };

// export default TaskItem;
