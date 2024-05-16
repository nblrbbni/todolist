import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, completeTask }) => {
  return (
    <div className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          taskName={task.taskName}
          id={task.id}
          completed={task.completed}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;