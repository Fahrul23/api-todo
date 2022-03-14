const express = require('express')
const { getAllTodo, addTodo, detailTodo, editTodo, deleteTodo } = require('../Controller/Todo')
const router = express.Router()

router.get('/todos', getAllTodo)
router.post('/todo', addTodo)
router.get('/todo/:id', detailTodo)
router.patch('/todo/:id', editTodo)
router.delete('/todo/:id', deleteTodo)


module.exports = router