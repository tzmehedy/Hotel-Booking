const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 5000

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

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


const roomCollections = client
  .db("HotelManagementSystem")
  .collection("allRooms")
const bookedCollections = client
  .db("HotelManagementSystem")
  .collection("allBookedInfo")
async function run() {
  try {

    

    app.get("/rooms", async(req,res)=>{
        const result = await roomCollections.find().toArray()
        res.send(result)
    })

    app.get("/roomDetails/:id", async(req,res)=>{
        const id = req.params.id 
        const query = {_id: new ObjectId(id)}
        const result = await roomCollections.findOne(query)
        res.send(result)
    })

    app.post("/allBooked", async(req,res)=>{
      const bookedInfo = req.body
      const result = await bookedCollections.insertOne(bookedInfo)
      res.send(result)
    })

    app.patch("/updateNoOFRooms/:id", async(req,res)=>{
      const id = req.params.id 
      const check = req.body
      const query = {_id: new ObjectId(id)}
      const updateDoc = {
        $set: {
          totalRoom: check.remainingRoom
        }
      }
      const result = await roomCollections.updateOne(query, updateDoc)
      res.send(result)
    })

    app.get("/myBookedInfo", async(req,res)=>{
      const email = req.query.email 
      const query = {email:email}
      const result = await bookedCollections.find(query).toArray();
      res.send(result)
    })

    app.get("/updateBookings/:id", async(req,res)=>{
      const id = req.params.id 
      const query = {_id: new ObjectId(id)}
      const result = await bookedCollections.findOne(query)
      res.send(result)
    });


    
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