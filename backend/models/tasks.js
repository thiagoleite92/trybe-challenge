const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getTasksList = async () => {
  const db = await connection();

  const tasksList = await db.collection('tasks').find().toArray();

  return tasksList;
};

const getTaskListById = async (id) => {
  const db = await connection();
  const simpleTask = await db.collection('tasks').findOne({ _id: ObjectId(id) })

  return simpleTask;
}

const insertTasks = async (task) => {
  const db = await connection();

  await db.collection('tasks').insertOne({ task });
};

const updateTask = async (id, task) => {
  const db = await connection();

  await db.collection('tasks').findOneAndUpdate({
    _id: ObjectId(id)
  }, {
    $set: {
      task,
    }
  });
};

const deleteTasks = async (id) => {
  const db = await connection();
  await db.collection('tasks').deleteOne({ _id: ObjectId(id) })
}


module.exports = {
  getTasksList,
  getTaskListById,
  insertTasks,
  updateTask,
  deleteTasks,
};