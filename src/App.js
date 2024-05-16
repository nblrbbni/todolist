import React, { useState } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { handleChange, addTask, deleteTask, completeTask } from './TaskUtils';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  return (
    <div className="App">
      <header>
        <h1>TO DO LIST PROJECT</h1>
      </header>
      <AddTask
        currentTask={currentTask}
        handleChange={(event) => handleChange(setCurrentTask, event)}
        addTask={() => addTask(tasks, setTasks, currentTask)}
      />
      <TaskList
        tasks={tasks}
        deleteTask={(id) => deleteTask(tasks, setTasks, id)}
        completeTask={(id) => completeTask(tasks, setTasks, id)}
      />
    </div>
  );
}

export default App;