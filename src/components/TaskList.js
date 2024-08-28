import React, { useState } from "react";
import TaskForm from './TaskForm';
import '../stylesheets/TaskList.css';
import Task from './Task';

function TaskList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTask = [task, ...tasks];
      setTasks(updatedTask);
    }
  };

  const deleteTask = id => {
    const updatedTask = tasks.filter(task => task.id !== id);
    setTasks(updatedTask);
  };

  const completeTaks = id => {
    const updateTask = tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    })

    setTasks(updateTask);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              completeTask={completeTaks}
              deleteTask={deleteTask} /> 
          )
        }
      </div>
    </>
  );
}

export default TaskList;