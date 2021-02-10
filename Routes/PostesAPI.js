const express = require('express')
const router=express.Router();
router.get('/Postes', (req, res) => {
    res.send('Get all Postes')
  })
  router.get('/Postes/:id', (req, res) => {
    res.send('Get poste by id')
  })
  router.post('/Postes', (req, res) => {
    res.send('Ajouter Poste')
  })
  router.delete('/Postes/:id', (req, res) => {
    res.send('Delete Poste')
  })
  router.put('/Postes/:id', (req, res) => {
    res.send('Modifier Poste')
  })
module.exports = router;
