const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

async function run() {
  try {
    await client.connect();
    const database = client.db("BBQ");
    const BBQTime = database.collection("BBQ");

    BBQTime.deleteMany({});

    for (let i = 0; i < 21; i++) {
      const doc = { timestamp: new Date().addHours(i), temp: i * 10 };
    console.log(doc)
      const result = await BBQTime.insertOne(doc);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
