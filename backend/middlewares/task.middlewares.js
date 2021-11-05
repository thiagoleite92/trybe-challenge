const { ObjectId } = require('mongodb');
const { getTasksList } = require("../models/tasks");

const verifyTaskID = async (req, res, next) => {
  const { id } = req.params

  if (!ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'ID not found' });
  };

  next();
}

module.exports = {
  verifyTaskID,
}