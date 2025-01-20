import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskColumn from "./TaskColumn";
import CreateTask from "./CreateTask";
import useTasks from "../../hooks/useTasks";
import { useNavigate } from "react-router-dom";

const TaskBoard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const { columns, updateTaskStatus, setColumns } = useTasks();

  const handleTaskCreated = (newTask) => {
    const updatedColumns = { ...columns };
    updatedColumns.pending = [...updatedColumns.pending, newTask];
    setColumns(updatedColumns);
  };

  const handleDrop = (taskId, fromColumn, toColumn) => {
    if (fromColumn === toColumn) return;

    const task = columns[fromColumn].find((task) => task._id === taskId);
    const updatedSource = columns[fromColumn].filter(
      (task) => task._id !== taskId
    );
    const updatedDest = [...columns[toColumn], { ...task, status: toColumn }];

    setColumns({
      ...columns,
      [fromColumn]: updatedSource,
      [toColumn]: updatedDest,
    });

    updateTaskStatus(taskId, toColumn);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl  py-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-center drop-shadow-lg tracking-wide">
            Task Management Board
          </h1>

          <div className="flex flex-row justify-center items-center gap-x-6 py-4 bg-white shadow-xl mx-auto w-11/12 max-w-4xl px-4">
            <CreateTask onTaskCreated={handleTaskCreated} />

            <button
              onClick={() => navigate("/feeds")}
              className="px-8 py-3 h-[50px] bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
            >
              Go to Feed
            </button>

            <button
              onClick={() => navigate("/feed")}
              className="px-8 py-3 h-[50px] bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300"
            >
              Add Feed
            </button>
          </div>

          <div className="flex justify-between mt-10 gap-6">
            {["pending", "completed", "done"].map((column) => (
              <TaskColumn
                key={column}
                title={column.charAt(0).toUpperCase() + column.slice(1)}
                tasks={columns[column]}
                onDrop={handleDrop}
                columnId={column}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default TaskBoard;

// import React, { useEffect } from "react";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import TaskColumn from "./TaskColumn";
// import CreateTask from "./CreateTask";
// import useTasks from "../../hooks/useTasks";
// import { useNavigate } from "react-router-dom";

// const TaskBoard = () => {
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token"); // Get the token from localStorage

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   });

//   const { columns, updateTaskStatus, setColumns } = useTasks();

//   // Handle task creation
//   const handleTaskCreated = (newTask) => {
//     const updatedColumns = { ...columns };
//     updatedColumns.pending = [...updatedColumns.pending, newTask]; // Add to pending column
//     setColumns(updatedColumns); // Update state
//   };

//   // Handle when a task is dropped into a column
//   const handleDrop = (taskId, fromColumn, toColumn) => {
//     if (fromColumn === toColumn) return; // No-op if dropped in the same column

//     const task = columns[fromColumn].find((task) => task._id === taskId);
//     const updatedSource = columns[fromColumn].filter(
//       (task) => task._id !== taskId
//     );
//     const updatedDest = [...columns[toColumn], { ...task, status: toColumn }];

//     // Update columns in state
//     setColumns({
//       ...columns,
//       [fromColumn]: updatedSource,
//       [toColumn]: updatedDest,
//     });

//     // Call API to update task status
//     updateTaskStatus(taskId, toColumn);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="bg-gray-100 min-h-screen py-8">
//         <div className="max-w-6xl mx-auto">
//           <CreateTask onTaskCreated={handleTaskCreated} />
//           <div
//             className="flex justify-between mt-8 gap-4"
//             style={{
//               cursor: "grab", // Set the cursor to "grab"
//             }}
//           >
//             {["pending", "completed", "done"].map((column) => (
//               <TaskColumn
//                 key={column}
//                 title={column.charAt(0).toUpperCase() + column.slice(1)}
//                 tasks={columns[column]}
//                 onDrop={handleDrop}
//                 columnId={column}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// export default TaskBoard;
