const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 5000

const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("The hotel management system is coming")
})

const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k8aq9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const roomCollections = client.db("HotelManagementSystem").collection("allRooms")

    app.get("/rooms", async(req,res)=>{
        const result = await roomCollections.find().toArray()
        res.send(result)
    })


    
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    
  }
}
run().catch(console.dir);


app.listen(port, ()=>{
    console.log(`The server is running on the port of ${port}`)
})