const connection = require('./connection');

const getTasksList = async () => {
  const db = await connection();

  const tasksList = await db.collection('tasks').find().toArray();

  return tasksList;
};

const insertTask = async (task) => {
  const db = await connection();

  await db.collection('tasks').insertOne({ task });
};


module.exports = {
  getTasksList,
};