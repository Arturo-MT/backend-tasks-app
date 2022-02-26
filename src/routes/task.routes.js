const { Router } = require('express');
const { getAllTasks, getTask, postTask, deleteTask, putTask } = require('../controllers/task.controller');

const router = Router();

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', postTask);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', putTask);

module.exports = router;