import React, { useState } from 'react'

function InsertTask() {
  const [task, setTask] = useState('');

  const handleChange = (event) => { 
    setTask(event.target.value)
  }

  return (
    <label htmlFor="task">
      Task: <input
        ype="text"
        placeholder="Type your task"
        name="task"
        id="task"
        value={task}
        onChange={(event) => handleChange(event)} />
    </label>
  )
};

export default InsertTask;
