import express from "express";


const app = express();

app.get("/", (req, res) => {
      res.json({message: "Hello World_depeinglid"});
});



app.listen(()=>{
    console.log("Listening on port 3000");
});