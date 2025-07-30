import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
// import dotenv from "dotenv";
import React from "react";
import route from "./complaintRouter/ComplaintRouter.js";
import cors from "cors"
const app = express();
app.use(bodyParser.json());


app.use(cors({
    // origin: ["https://delicate-lily-07f24f.netlify.app/"],
    // methods: ["POST", "GET"],
    // credentials: true
}))


// dotenv.config();

const PORT = 8000;
const MONGOURI = 'mongodb+srv://MONGODBroot:mongodbroot@cluster-1.jwbwcpv.mongodb.net/';

mongoose
    .connect(MONGOURI)
    .then(() =>{
        console.log(`DB Connected Successfully`);
        app.listen(PORT, ()=>{
            console.log(`Server Running on Port: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error)
    })

app.use("/api", route)
console.log("Hey Boss");

