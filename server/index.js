const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("The hotel management system is coming")
})

app.listen(port, ()=>{
    console.log(`The server is running on the port of ${port}`)
})