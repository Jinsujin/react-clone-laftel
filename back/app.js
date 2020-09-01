const express = require('express');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

const app = express();
const ddd = 'ddd';

app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(3065, () => {
  console.log('서버 실행중');
});
