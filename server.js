//Dependencies
const express = require("express");
const path = require("path");

//Create server
const app = express();
app.use(express.static('public'));

//Set port
const PORT = process.env.PORT || 3000;

//Middleware t handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./public/htmlRoutes/index.html"));
});

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "./public/htmlRoutes/notes.html"));
});

//Create listener
app.listen(PORT, function(){
    console.log("I'm listening on PORT" + PORT);
});