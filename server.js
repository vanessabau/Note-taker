//Dependencies
const express = require("express");
const path = require("path");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

//Create server
const app = express();
app.use(express.static('public'));

//Set port
const PORT = process.env.PORT || 3000;

//Middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use("/", htmlRoutes);
apiRoutes(app);

//Create listener
app.listen(PORT, function(){
    console.log("I'm listening on PORT" + PORT);
});