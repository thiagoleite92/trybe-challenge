const express = require('express');
const { requestTasksList, requestInsertTasks, requestDeleteTasks } = require('../controllers/tasks');
const { verifyTaskID } = require('../middlewares/task.middlewares');
const router = express.Router();

router.get('/home', requestTasksList)

router.post('/addtask', requestInsertTasks)

router.delete('/delete/:id', requestDeleteTasks);

module.exports = {
  router,
};
