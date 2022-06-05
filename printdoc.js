const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017/";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('BBQ');
    const BBQTime = database.collection('BBQ');

    let found = await BBQTime.findOne();
    console.log(found);



  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);