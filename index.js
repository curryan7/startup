const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.use(express.json());
app.use(express.static('public'));
const DB = require('./database.js')

var apiRouter = express.Router();
app.use(`/api`, apiRouter);


app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

  // GetPolls
  apiRouter.get('/ideas', async (_req, res) => {
    const polls = await DB.getPoll();
    res.send(polls);
  });

  // SubmitPolls
  apiRouter.post('/ideas', async (req, res) => {
    DB.addPoll(req.body);
    res.sendStatus(200)
  });
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

