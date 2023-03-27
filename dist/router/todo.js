"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ data: todos });
});
router.post('/', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toString(),
        title: body.title
    };
    todos.push(newTodo);
    res.status(200).json({ data: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const body = req.body;
    const todoIndex = todos.findIndex((result) => result.id === params.todoId);
    if (todoIndex > -1) {
        todos[todoIndex] = { id: todos[todoIndex].id, title: body.title };
        return res.status(200).json({ data: todos });
    }
});
router.delete('/:todoId', (req, res, next) => {
    const params = req.params;
    todos = todos.filter((result) => result.id !== params.todoId);
    res.status(200).json({ data: todos });
});
exports.default = router;
