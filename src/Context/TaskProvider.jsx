import { useState } from 'react';
import TaskContext from './TaskContext';

const TaskProvider = ({ children }) => {

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const toConsume = {
    task,
    setTask,
    taskList,
    setTaskList,
  };

  return (
    <TaskContext.Provider value={ toConsume } >
      {children}
    </TaskContext.Provider>
  )
};

export default TaskProvider;
