const { getTasksList, insertTasks, deleteTasks, getTaskListById, updateTask } = require("../models/tasks");

const tasksListService = async () => {
  const tasksList = await getTasksList();
  return tasksList;
};

const taskByIdService = async (id) => {
  const task = await getTaskListById(id);

  return task;
}

const insertTasksService = async (task) => {
  await insertTasks(task)
}

const updateTaskService = async (id, task) => {
  await updateTask(id, task);
}

const deleteTasksService = async (id) => {
  await deleteTasks(id)
}

module.exports = {
  tasksListService,
  taskByIdService,
  insertTasksService,
  updateTaskService,
  deleteTasksService,
};
