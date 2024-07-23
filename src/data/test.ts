const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://Nhat323242:Nhat323242@cluster0.ooheyfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const data = await client.db('admin').command({ ping: 1 });
    const database = client.db('apple-store'); 
    const collection = database.collection('Macs');
    const documents = await collection.find().toArray();
    console.log('Documents:', documents);

    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!',
      data,
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
