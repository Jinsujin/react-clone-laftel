const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');

const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log('-------db connect success------');
  })
  .catch(console.error);

app.use(
  cors({
    origin: true,
    credentials: false,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(3065, () => {
  console.log('서버 실행중');
});
