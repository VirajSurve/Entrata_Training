import express from "express";
import {contactRoute} from "./routes.js";
import {add} from "./utils.js";

const app=express();

const PORT=3000;

app.get("/",(req,res)=>{
    res.send("Express server running");
});

app.get("/about",(req,res)=>{
    res.send("About route working");
});

app.get("/contact",contactRoute);

app.get("/sum",(req,res)=>{
    res.send("Sum is: "+add(5,7));
});

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});