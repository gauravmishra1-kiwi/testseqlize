const express = require('express')
const  Sequelize  = require('sequelize');

const bodyparser=require("body-parser")
const app = express()
const port = 3000

const User = require("./models/user")
const userCtrl = require("./controllers/userController")



app.use(bodyparser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add',userCtrl.addUsers)
app.get('/read',userCtrl.readUsers)
app.get('/read/:id',userCtrl.readUser)
app.patch('/delete/:id',userCtrl.deleteUsers)
app.delete('/delete/:id',userCtrl.deleteUsers)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})