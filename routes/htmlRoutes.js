//Dependencies
const path = require("path");
const router = require("express").Router();

//Routes
//Send index.html file when endpoint is "/"
router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/htmlDocs/index.html"));
});

//Send notes.html file when endpoint is "/notes"
router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/htmlDocs/notes.html"));
});

//Export module for use
module.exports = router;