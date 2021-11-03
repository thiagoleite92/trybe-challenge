import React from 'react'

function TaskList({ taskList }) {
  return (
    <main>
      <ul>
        {
          taskList
            ? taskList.map((task) => {
              return (
                <li>{task}</li>
              )
            })
            : null
        }
      </ul>
    </main>
  )
}

export default TaskList;
