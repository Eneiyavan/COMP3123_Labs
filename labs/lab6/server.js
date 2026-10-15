const express = require("express")
const mongoose = require("mongoose")

const noteRoutes = require("./routes/NoteRoutes.js")
const DB_URL = "mongodb+srv://eneiyavan_db_user:IyBVHCRiVMzk4eQa@week06cluster.3305pxe.mongodb.net/?appName=Week06Cluster"

const PORT = process.env.PORT || 8081

const app = express()

// Middleware
app.use(express.json()) // Serving JSON
app.use(express.urlencoded({extended: true})) // Accessing URL parameters and query values

// Root route
app.get("/", (request, response) => {
    response.send("<h2>Welcome to the Note taking application - Server root contents</h2>")
})

// Set up the API route
app.use("/api", noteRoutes)

// Connect to MongoDB Atlas
mongoose.connect(DB_URL)
    .then(() => {
        console.log("Successfully connected to the MongoDB Atlas Server")

        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log("Could not connect to the DB")
        console.log(error)
        process.exit(1)
    })