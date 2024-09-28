"use client";
import { useState } from 'react';


const TaskItem = ({ task, onToggle, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          defaultValue={task.text}
          onBlur={handleSave}
        />
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={handleToggle}
          />
          <span
            onClick={handleEdit}
            style={{
              textDecoration: task.isCompleted ? 'line-through' : 'none',
            }}
          >
            {task.text}
          </span>
          <button onClick={handleDelete}>Eliminar</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;