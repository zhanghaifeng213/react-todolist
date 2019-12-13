const express = require('express');
const router = express.Router();

let todolist = [{id: 1, isDone: false, name: 'todo'}]
let curId = 1

router.get('/', async (req, res) => {
  // const movies = await Movie.find().sort('name');
  res.send(todolist);
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const name = req.body.name
  curId += 1
  todolist.push({id: curId, isDone: false, name})
  
  res.send(todolist);
});

router.put('/change/:id', async (req, res) => {
  console.log(req.params);
  const changeId = Number(req.params.id)
  todolist = todolist.map((item) => {
    if(changeId === item.id) {
      item.isDone = !item.isDone
    }
    return item
  })

  res.send(todolist);
});

router.delete('/:id', async (req, res) => {
  console.log(req.params);
  const deleteId = Number(req.params.id)
  todolist = todolist.filter((item) => {
    return item.id !== deleteId
  })
 
  res.send(todolist);
});

module.exports = router; 