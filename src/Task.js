import React from 'react';
import { Button } from 'react-bootstrap';

const Task = ({ taskName, id, completed, deleteTask, completeTask }) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: completed? "green" : "white" }}
    >
      <h1>{taskName}</h1>
      <Button variant="primary" onClick={() => completeTask(id)}> Complete </Button>
      <Button variant="danger" onClick={() => deleteTask(id)}> X </Button>
    </div>
  );
};

export default Task;