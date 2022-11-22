var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("invoker");
database.dropDatabase()
database = client.db("invoker");
const cats = database.collection("invoker");
const result = await cats.insertOne({name:"Сфера"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()