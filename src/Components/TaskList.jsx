import { useContext } from 'react';
import TaskContext from '../Context/TaskContext';

function TaskList() {

  const { taskList } = useContext(TaskContext);

  return (
    <main>
      <ul>
        {taskList
          ? taskList.map((task, index) => {
            return (
              <li key={index}>{task}</li>
            )
          })
          : null
        }
      </ul>
    </main>
  )
}

export default TaskList;
