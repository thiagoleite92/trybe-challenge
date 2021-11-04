const { tasksListService, insertTasksService, deleteTasksService } = require('../services/tasks')

const requestTasksList = async (_req, res) => {
  const tasksList = await tasksListService();
  return res.status(200).json(tasksList);
}

const requestInsertTasks = async (req, res) => {
  const { task } = req.body;
  await insertTasksService(task);

  return res.status(201).json({ message: 'Created'});
}

const requestDeleteTasks =  async (req, res) => {
  const { id } = req.params;

  await deleteTasksService(id);

  return res.status(204).json({ message: 'Deleted'})
}

module.exports = {
  requestTasksList,
  requestInsertTasks,
  requestDeleteTasks,
}