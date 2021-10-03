const express = require('express');
const app = express();
const port = 5000;

const config = require('./config/key');

const bodyParser = require('body-parser');
const { User } = require("./models/User");

// application/x-www-form-urlencoded 데이터 분석하여 가져옴
app.use(bodyParser.urlencoded({extended: true}));

// application/json 타입 분석하여 가져옴
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! ~~ 안녕 나야 응 나야^^ Good~~')
})

app.post('/register', (req, res) => {
    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.
    // bodyParser를 통해서 req.body에 클라이언트 user 데이터가 존재하게된다.
    const user = new User(req.body);

    // 몽고디비 메소드
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    }) 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})