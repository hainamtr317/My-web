const express = require('express');
const router = require('./routers/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const dotenv= require('dotenv').config()


const app = express()

const port = process.env.PORT || 5001;
app.use(express.json())
app.use("/api/user", router)
app.use(errorHandler)
app.listen (port, ()=> {
    console.log(`listening on port ${port}`)
})