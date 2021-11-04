import { useContext } from 'react';
import TaskContext from '../Context/TaskContext';


function InsertButton() {

  const { taskList, setTaskList } = useContext(TaskContext)

  const handleInsertTask = (taskList) => {
    setTaskList(taskList)
  }

  return (
    <button type='button' onClick={ () => handleInsertTask}>
      Insert Task
    </button>
  )
}

export default InsertButton;
