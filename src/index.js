require("dotenv").config();
const express = require("express")
//import express from "express";
import bodyParser  from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

const app = express()
viewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
initWebRoutes(app);
let port =process.env.PORT||5000;
app.listen(port,()=>{
    console.log("Connect to port 5000");
});
