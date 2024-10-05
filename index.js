import express from "express";


const app = express();

app.post("/", (req, res) => {
     return res.json({message: "Hello World_depeinglid"});
});



app.listen(3000,()=>{
    console.log("Listening on port 3000");
});