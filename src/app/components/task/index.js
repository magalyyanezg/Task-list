// pages/index.js
import { useState, useEffect, useCallback, useMemo } from 'react';
import TaskForm from '../task/TaskForm';
import TaskList from '../task/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const addTask = useCallback(
    (task) => {
      const newTask = {
        id: tasks.length + 1,
        text: task,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    },
    [tasks]
  );

  const toggleTask = useCallback(
    (id) => {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      );
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    },
    [tasks]
  );

  const deleteTask = useCallback(
    (id) => {
      const filteredTasks = tasks.filter((task) => task.id !== id);
      setTasks(filteredTasks);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    },
    [tasks]
  );

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export { TaskList, TaskForm };