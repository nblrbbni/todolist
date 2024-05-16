import React from 'react';
import { Button } from 'react-bootstrap';

const AddTask = ({ currentTask, handleChange, addTask }) => {
  return (
    <div className="addTask">
      <input value={currentTask} onChange={handleChange} />
      <Button variant='secondary' size="sm" onClick={addTask} > Add Task</Button>
    </div>
  );
};

export default AddTask;