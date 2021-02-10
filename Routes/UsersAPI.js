const express = require('express')
const router=express.Router();

  router.get('/users', (req, res) => {
    res.send('Get all users')
  })
  router.get('/users/:id', (req, res) => {
    res.send('get users by id')
  })
  router.post('/users', (req, res) => {
      console.log(req.body);
    res.send('post user')
  })
  router.delete('/users/:id', (req, res) => {
    res.send('Delete user')
  })
  router.put('/users/:id', (req, res) => {
    res.send('update users')
  })
module.exports = router;