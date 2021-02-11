const db=require('./DataBase/Connect') //connection test (voir Connect.js)
const UsersAPI=require('./Routes/UsersAPI')
const TodosAPI=require('./Routes/TodosAPI')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello sofien')
})
app.use('/api',UsersAPI);
app.use('/api',TodosAPI);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
