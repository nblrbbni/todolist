export const handleChange = (setCurrentTask, event) => {
  setCurrentTask(event.target.value);
};

export const addTask = (tasks, setTasks, currentTask) => {
  const newTask = {
    id: tasks.length === 0? 1 : tasks[tasks.length - 1].id + 1,
    taskName: currentTask,
    completed: false,
  };
  setTasks(currentTask!== ""? [...tasks, newTask] : tasks);
};

export const deleteTask = (tasks, setTasks, id) => {
  setTasks(tasks.filter((task) => task.id!== id));
};

export const completeTask = (tasks, setTasks, id) => {
  setTasks(
    tasks.map((task) => {
      if (task.id === id) {
        return {...task, completed: true };
      } else {
        return task;
      }
    })
  );
};