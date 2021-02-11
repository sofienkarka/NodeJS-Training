const express = require('express')
const Todos=require('../Models/TodoSchema')
const router=express.Router();
router.get('/ToDos', async(req, res) => {
  const found=await Todos.find()
  // console.log(found);
    res.json(found)
  })
  router.get('/ToDos/:id', async(req, res) => {
    const FoundId=await Todos.findById(req.params.id)
    // console.log(FoundId);
    res.json(FoundId)
  })
  router.post('/ToDos',async (req, res) => {
  
    const NewTodo=await Todos.create(req.body);
    // console.log(NewTodo);
    res.json(NewTodo)
  })
  router.delete('/ToDos/:id', async(req, res) => {
    await Todos.findByIdAndDelete(req.params.id)
    res.json({message : 'Poste deleted syuccessfully'})
  })
  router.put('/ToDos/:id',async (req, res) => {
 const Del= await Todos.findOneAndUpdate(req.params.id, req.body,{new:true})
    res.json(Del)
  })
module.exports = router;
