import React from "react";
import { useDrop } from "react-dnd";
import TaskItem from "./TaskItem";

const TaskColumn = ({ title, tasks, onDrop, columnId }) => {
  const [, dropRef] = useDrop({
    accept: "TASK",
    drop: (item) => onDrop(item.id, item.fromColumn, columnId),
  });

  return (
    <div
      ref={dropRef}
      className="w-1/3 bg-white p-4 rounded-lg shadow-md min-h-[400px]"
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} columnId={columnId} />
      ))}
    </div>
  );
};

export default TaskColumn;

// import React from "react";
// import { Draggable } from "react-beautiful-dnd";
// import TaskItem from "./TaskItem";

// const TaskColumn = ({ title, tasks, provided }) => (
//   <div
//     className="w-1/3 bg-white p-4 rounded-lg shadow-md"
//     ref={provided.innerRef}
//     {...provided.droppableProps}
//   >
//     <h2 className="text-xl font-bold mb-4">{title}</h2>
//     {tasks.map((task, index) => (
//       <Draggable key={task._id} draggableId={task._id} index={index}>
//         {(provided) => <TaskItem task={task} provided={provided} />}
//       </Draggable>
//     ))}
//     {provided.placeholder}
//   </div>
// );

// export default TaskColumn;
