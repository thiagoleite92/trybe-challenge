const { tasksListService, insertTasksService, deleteTasksService, taskByIdService, updateTaskService } = require('../services/tasks')

const requestTasksList = async (_req, res) => {
  const tasksList = await tasksListService();
  return res.status(200).json(tasksList);
}

const requestSimpleTask = async (req, res) => {
  const { id } = req.params;

  const simpleTask = await taskByIdService(id);

  return res.status(200).json(simpleTask);
}

const requestInsertTasks = async (req, res) => {
  const { task } = req.body;
  await insertTasksService(task);

  return res.status(201).json({ message: 'Created'});
}

const requestUpdateTask = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  await updateTaskService(id, task);

  return res.status(201).json({ message: 'Updated'});
}

const requestDeleteTasks =  async (req, res) => {
  const { id } = req.params;
  await deleteTasksService(id);

  return res.status(204).json({ message: 'Deleted'})
}

module.exports = {
  requestTasksList,
  requestSimpleTask,
  requestInsertTasks,
  requestDeleteTasks,
  requestUpdateTask,
};
