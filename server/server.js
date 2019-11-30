import express from 'express';
import cors from 'cors';

import statsRouter from './routes/stats';
import schoolRouter from './routes/school';
import classRouter from './routes/class';
import userRouter from './routes/user';
import teacherRouter from './routes/teacher';
import studentRouter from './routes/student';

const app = express();
app.use(cors());
app.use(express.json({
  type: ['application/json', 'text/plain']
}));

const port = process.env.PORT || 8000;

app.use('/stats', statsRouter);
app.use('/schools?', schoolRouter);
app.use('/class(es)?', classRouter);
app.use('/users?', userRouter);
app.use('/teachers?', teacherRouter);
app.use('/students?', studentRouter);

app.get('/', (req, res) => {
  res.status(200).send('OneRoster csv file generator');
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
