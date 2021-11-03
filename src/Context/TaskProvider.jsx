import { useState } from 'react';
import TaskContext from './TaskContext';

const TaskProvider = ({ children }) => {

  const [task, setTask] = useState('');

  const toConsume = {
    task,
    setTask
  };

  return (
    <TaskContext.Provider value={ toConsume } >
      {children}
    </TaskContext.Provider>
  )
};

export default TaskProvider;
