import express from 'express';
import cors from 'cors';

import schoolRouter from './routes/school';

const app = express();
app.use(cors());
app.use(express.json({
  type: ['application/json', 'text/plain']
}));

const port = process.env.PORT || 8000;


app.use('/schools?', schoolRouter);


app.get('/', (req, res) => {
  res.status(200).send('OneRoster csv file generator');
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
