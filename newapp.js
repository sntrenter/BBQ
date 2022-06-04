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

    const doc = {"timestamp": new Date(),"temp": 100 }

    const result = await BBQTime.insertOne(doc)

    //BBQTime.insertOne(doc,function(err, res) {
    //    if (err) throw err;
    //    console.log("1 document inserted");
    //    db.close();
    //  })


    //let x = BBQTime.find({"temp":100})

    //console.log(x)

    //onsole.log(BBQTime.findOne())

    // Query for a movie that has the title 'Back to the Future'
    //const query = { title: 'Back to the Future' };
    //const movie = await movies.findOne(query);
    //console.log(movie);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);