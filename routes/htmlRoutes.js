const path = require("path");
const router = require("express").Router();


//Routes
router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/htmlDocs/index.html"));
});

router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/htmlDocs/notes.html"));
});

module.exports = router;