import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './Task.css'; // Import a CSS file for additional styling

const Task = ({ task, onDelete, onToggle }) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedDate = task.completedDate ? new Date(task.completedDate).toLocaleString(undefined, options) : null;
  const formattedStartTime = task.startTime ? new Date(task.startTime).toLocaleString(undefined, options) : null;

  let statusText = task.completed ? 'Task Completed' : 'Working on it';

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text} 
        <FaTimes className="delete-icon" onClick={() => onDelete(task.id)} />
      </h3>
      <div className="task-info">
        {formattedStartTime && (
          <p className="start-time">
            Task started on {formattedStartTime}
          </p>
        )}
        {formattedDate && (
          <p className="completed-time">
            Task ended on {formattedDate}
          </p>
        )}
        <p className={`status ${task.completed ? 'completed' : ''}`}>{statusText}</p>
      </div>
      <button className={`toggle-btn ${task.completed ? 'incomplete' : 'complete'}`} onClick={() => onToggle(task.id)}>
        {task.completed ? 'Incomplete' : 'Complete'}
      </button>
    </div>
  );
};

export default Task;
