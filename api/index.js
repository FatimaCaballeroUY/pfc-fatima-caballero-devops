const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://mongodb:27017';
const client = new MongoClient(url);

client.connect(function(err) {
  console.log("Connected successfully to MongoDB service");
  client.close();
});
