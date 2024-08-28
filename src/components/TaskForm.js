import React, { useState } from "react";
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';


function TaskForm(props) {

  const [input, setInput] = useState('');

  const changeManager = e => {
    setInput(e.target.value);
  }

  const sentManager = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    };

    const inputDOM = document.getElementById('task-input');
    inputDOM.value='';
    setInput('');
    
    props.onSubmit(newTask);
    
  }

  return(
    <form 
      className='task-form'
      onSubmit={sentManager}>
      <input
        id='task-input'
        className='task-input'
        type='text'
        placeholder='Agrega un Artículo a la Lista'
        name='text'
        onChange={changeManager}
      />
      <button 
        className='task-button'
        onClick={props.addTask}>
          Agregar
      </button>
    </form>
  );
}

export default TaskForm;