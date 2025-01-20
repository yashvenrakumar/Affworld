const express = require('express');
const { createTask, updateTaskStatus, deleteTask, getTasks } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/tasks', authMiddleware, createTask);
router.get('/tasks', authMiddleware, getTasks);
router.patch('/tasks/:id', authMiddleware, updateTaskStatus);
router.delete('/tasks/:id', authMiddleware, deleteTask);

module.exports = router;
