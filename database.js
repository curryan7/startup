const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const pollCollection = db.collection('polls');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

//adding poll into database
async function addPoll(poll) {
  const result = await pollCollection.insertOne(poll);
};

//random generator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

//get a random poll
async function getPoll() {
  cursor = await pollCollection.find()
  result = await cursor.toArray()
  count_of_result = result.length
  random_num = getRandomInt(count_of_result)
  console.log(result[random_num]);
  return result[random_num]
};



module.exports = {addPoll,getPoll};




// async function connectToDatabase() {
//   try {
//     await client.connect();
//     db = client.db(config.database);
//     console.log('Connected to MongoDB!');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1)
//   }
// }

// function getDatabase() {
//   if (!db) {
//     console.error('Database not initialized. Call connectToDatabase() first.');
//     process.exit(1);
//   }
//   return db
// }

// module.exports = {
//   connectToDatabase,
//   getDatabase
// };


