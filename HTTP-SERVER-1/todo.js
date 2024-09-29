const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.json());

let todos = [];

app.get('/todos', (req, res) =>{
    res.send(todos);
})

app.post('/todos',(req,res)=>{
    const todo = req.body;
    //body
    // {
    //     "id": 1,
    //     "title": "Task 1",
    //     "desc": "Desc 1"
    // }
    todos.push(todo);
    res.send("Todo Post done");
})

app.put('/todos/:id', (req, res)=>{
    const id = 1;
    const todo = todos.find((t)=> t.id === id);
    todo.title = "Task infinity";
    todo.desc = "Description Infinity";
    res.send(todos);
})

app.delete('/todos/:id', (req,res)=>{
    const id = 1;
    todos.splice(id-1,1);
    res.send(`Deleted todo with index 1`);
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})