import React, { useState, useEffect } from "react";
import TaskForm from './TaskForm';
import '../stylesheets/TaskList.css';
import Task from './Task';

function TaskList() {
  const lsTasksKey = 'tasks';
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem(lsTasksKey);
    if (storedData) {
      setTasks(JSON.parse(storedData));
    } else {
      setTasks([]);
    }
  }, []);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTask = [task, ...tasks];
      localStorage.setItem(lsTasksKey, JSON.stringify(updatedTask));
      setTasks(updatedTask);
    }
  };

  const deleteTask = id => {
    const updatedTask = tasks.filter(task => task.id !== id);
    localStorage.setItem(lsTasksKey, JSON.stringify(updatedTask));
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