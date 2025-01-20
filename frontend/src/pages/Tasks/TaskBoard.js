import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskColumn from "./TaskColumn";
import CreateTask from "./CreateTask";
import useTasks from "../../hooks/useTasks";

const TaskBoard = () => {
  const { columns, updateTaskStatus, setColumns } = useTasks();

  // Handle task creation
  const handleTaskCreated = (newTask) => {
    const updatedColumns = { ...columns };
    updatedColumns.pending = [...updatedColumns.pending, newTask]; // Add to pending column
    setColumns(updatedColumns); // Update state
  };

  // Handle when a task is dropped into a column
  const handleDrop = (taskId, fromColumn, toColumn) => {
    if (fromColumn === toColumn) return; // No-op if dropped in the same column

    const task = columns[fromColumn].find((task) => task._id === taskId);
    const updatedSource = columns[fromColumn].filter(
      (task) => task._id !== taskId
    );
    const updatedDest = [...columns[toColumn], { ...task, status: toColumn }];

    // Update columns in state
    setColumns({
      ...columns,
      [fromColumn]: updatedSource,
      [toColumn]: updatedDest,
    });

    // Call API to update task status
    updateTaskStatus(taskId, toColumn);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-6xl mx-auto">
          <CreateTask onTaskCreated={handleTaskCreated} />
          <div
            className="flex justify-between mt-8 gap-4"
            style={{
              cursor: "grab", // Set the cursor to "grab"
            }}
          >
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
