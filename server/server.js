const express = require("express");
const cors = require("cors"); 
require("dotenv").config({path : "./config/.env "});
const app = express();
require("./config/db")

//The middlewares
app.use(cors());
app.use(express.json())

port = process.env.PORT || 5000;

//the routes
app.use('/api',  require("./routes/user.routes"));

app.listen(port, ()=>{
    console.log(`server is running in ${port}`)
});