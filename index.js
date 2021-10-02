const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dbUser:asdf1234@boilerplate.mnj0g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! ~~ 안녕 나야 응 나야^^')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})