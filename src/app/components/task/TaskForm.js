"use client";

import { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Agregar tarea"
      /> 
      <button onClick={() => setTasks([])} className='onclick'>Añadir </button>
    </form>
  );
};

export default TaskForm;