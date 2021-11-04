const connection = require('./connection');

const getTasksList = async () => {
  const db = await connection();

  const tasksList = await db.collection('tasks').find().toArray();

  return tasksList;
};

const insertTasks = async (task) => {
  const db = await connection();

  let idCounter =  await db.collection('tasks').find().toArray()

  await db.collection('tasks').insertOne({ id: idCounter.length + 1, task });
};

const deleteTasks =  async (id) => {
  const db = await connection();
  await db.collection('tasks').findOneAndDelete({}, { id })
}


module.exports = {
  getTasksList,
  insertTasks,
  deleteTasks,
};