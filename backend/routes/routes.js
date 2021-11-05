const express = require('express');
const { requestTasksList, requestInsertTasks, requestDeleteTasks, requestSimpleTask, requestUpdateTask } = require('../controllers/tasks');
const { verifyTaskID, validTask } = require('../middlewares/task.middlewares');
const router = express.Router();

router.get('/tasks/:id', verifyTaskID, requestSimpleTask)

router.put('/tasks/:id', verifyTaskID, validTask, requestUpdateTask)

router.delete('/delete/:id', verifyTaskID, requestDeleteTasks);

router.get('/tasks', requestTasksList)

router.post('/insert',validTask, requestInsertTasks)


module.exports = {
  router,
};
