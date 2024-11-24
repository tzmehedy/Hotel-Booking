const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5000"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("The hotel management system is coming");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k8aq9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const verifyToken = (req, res, next) => {
  const token = req.cookies.token
  console.log(token)
  if (!token) return res.status(401).send({ message: "Unauthorized Access" });
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({ message: "Unauthorized Access" });
    }
    console.log(decoded)
    req.user = decoded;
    next();
  });
};

async function run() {
  try {
    const roomCollections = client
      .db("HotelManagementSystem")
      .collection("allRooms");
    const bookedCollections = client
      .db("HotelManagementSystem")
      .collection("allBookedInfo");
    const reviewCollections = client
      .db("HotelManagementSystem")
      .collection("allReview");

    // JWT
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: "2h",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "node" : "strict",
        })
        .send({ success: true });
    });

    app.get("/logOut", (req, res) => {
      res
        .clearCookie("token", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "node" : "strict",
          maxAge: 0,
        })
        .send({ success: true });
    });

    app.get("/rooms", async (req, res) => {
      const sort = req.query.sort;
      let query ={}
      let options = {};
      if (options) options = { sort: { pricePerNight: sort === 'asc'? 1 : -1 } };
      const result = await roomCollections.find(query,options).toArray();
      res.send(result);
    });

    app.get("/roomDetails/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await roomCollections.findOne(query);
      res.send(result);
    });

    app.post("/allBooked", async (req, res) => {
      const bookedInfo = req.body;
      const result = await bookedCollections.insertOne(bookedInfo);
      res.send(result);
    });

    app.patch("/updateNoOFRooms/:id", async (req, res) => {
      const id = req.params.id;
      const noOfRooms = req.body;
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          totalRoom: noOfRooms.currentNoOfRooms,
        },
      };
      const result = await roomCollections.updateOne(query, updateDoc);
      res.send(result);
    });

    app.get("/myBookedInfo", verifyToken, async (req, res) => {
      const user = req.user;
      const email = req.query.email;
      const query = { email: email };
      if (user.email !== email)
        return res.status(403).send({ message: "Forbidden Access" });
      const result = await bookedCollections.find(query).toArray();
      res.send(result);
    });

    app.get("/updateBookings/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookedCollections.findOne(query);
      res.send(result);
    });

    app.patch("/updateDate/:id", async (req, res) => {
      const id = req.params.id;
      const updatedDate = req.body;
      const query = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          checkIn: updatedDate.checkIn,
          checkOut: updatedDate.checkOut,
        },
      };

      const result = await bookedCollections.updateOne(query, updatedDoc);
      res.send(result);
    });

    app.delete("/deleteMyBookings/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookedCollections.deleteOne(query);
      res.send(result);
    });

    app.post("/allReview", async (req, res) => {
      const reviewInfo = req.body;
      const result = await reviewCollections.insertOne(reviewInfo);
      res.send(result);
    });

    app.patch("/updateReviewStatus/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };

      const doc = {
        $set: {
          review: "yes",
        },
      };

      const result = await bookedCollections.updateOne(query, doc);
      res.send(result);
    });

    app.get("/reviews", async (req, res) => {
      const result = await reviewCollections.find().toArray();
      res.send(result);
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`The server is running on the port of ${port}`);
});
