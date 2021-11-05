const { ObjectId } = require('mongodb');
const Joi = require('@hapi/joi')

const taskSchema = Joi.object({
  task: Joi.string().min(5).required(),
})

const verifyTaskID = async (req, res, next) => {
  const { id } = req.params

  if (!ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'ID not found' });
  };

  next();
}

const validTask = (req, res, next) => {
  const { task } = req.body;

  if (!task || typeof task !== 'string' || task.length < 5) {
    res.status(404).json({ message: 'Insert a valid task' });
  }
  next();
}

module.exports = {
  verifyTaskID,
  validTask,
}