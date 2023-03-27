import {Router} from 'express'
import {Todo} from '../models/todo'

let todos:Todo[] = []
const router = Router();
type requestBody = {title:string}
type requestParams = {todoId:string}

router.get('/',(req,res,next)=>{
    res.status(200).json({data :todos})
})
router.post('/',(req,res,next)=>{
    const body = req.body as requestBody;
    const newTodo:Todo = {
        id:new Date().toString(),
        title: body.title
    }
    todos.push(newTodo)
res.status(200).json({data:todos})
})

router.put('/todo/:todoId',(req,res,next)=>{
    const params = req.params as requestParams;
    const body = req.body as requestBody;

    const todoIndex = todos.findIndex((result)=>result.id===params.todoId)
    if (todoIndex > -1) {
        todos[todoIndex]={id:todos[todoIndex].id,title:body.title}
        return res.status(200).json({data: todos})
    }
})

router.delete('/:todoId',(req,res,next)=>{
const params = req.params as requestParams;
todos = todos.filter((result)=>result.id !== params.todoId)
res.status(200).json({data:todos})
})

export default router;