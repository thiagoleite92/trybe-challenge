const { getTasksList } = require("../models/tasks");

const verifyTaskID = async (req, res, next) => {
  console.log(req.params.id)
  const tasksList = await getTasksList();

  const task = tasksList.filter(({ id }) => id === req.params.id)

  if (!task) {
    return res.status(404).json({ message: 'ID not found' });
  };

  next();
}

module.exports = {
  verifyTaskID,
}