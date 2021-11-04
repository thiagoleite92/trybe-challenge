import { useContext } from 'react';
import TaskContext from '../Context/TaskContext';

function InsertTask() {

  const { task, setTask } = useContext(TaskContext)

  const handleChange = (event) => {
    setTask(event.target.value)
  }

  return (
    <label htmlFor="task">
      Task:
      <input
        type="text"
        placeholder="Insert a task"
        name="task"
        id="task"
        value={task}
        onChange={(event) => handleChange(event)}
      />
    </label>
  )
};

export default InsertTask;
