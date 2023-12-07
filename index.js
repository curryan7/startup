const express = require('express');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js')

// The service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// public folder
app.use(express.static('public'));

// Trust headers that are forward from proxy
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

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


const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);