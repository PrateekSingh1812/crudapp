const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 3000

app.use(
    cors({
      origin: "*",
    })
  );

app.use(express.json())

const crudRoutes= require('./routes/crudRoutes')
app.use("/api/v1",crudRoutes);

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})

const dbConnect = require('./config/database')
dbConnect();





