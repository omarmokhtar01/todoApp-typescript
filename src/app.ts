import express from 'express'
import todoRoute from './router/todo'

const app = express()
app.use(express.json())
app.use(todoRoute)
app.listen(3000);