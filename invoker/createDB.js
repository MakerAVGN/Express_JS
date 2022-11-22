var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("invoker");
database.dropDatabase()
database = client.db("invoker");
const cats = database.collection("invoke");
const result = await cats.insertMany({data});
console.log(`${result.insertedCount} documents were inserted`);
} finally {
await client.close();
}
}
run()
