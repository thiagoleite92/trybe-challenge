const { getTasksList, insertTasks, deleteTasks } = require("../models/tasks");

const tasksListService = async () => {
  const tasksList = await getTasksList();
  return tasksList;
};

const insertTasksService = async (task) => {
  await insertTasks(task)
}

const deleteTasksService = async (id) => {
  await deleteTasks(id)
}

module.exports = {
  tasksListService,
  insertTasksService,
  deleteTasksService,
};
