const dbRouter = require("../db/logic");
// const { delete } = require("./htmlRoutes");
const router = require("express").Router();

module.exports = function(app){
    app.get('/api/notes', function(req, res){
        const notes = dbRouter.getNotes().then(notes =>{
        console.log(notes);
        res.json(notes);
        });
    });

    app.post('/api/notes', function(req, res){
        return writeFileAsync("../db/db.json", JSON.stringify(req.body));
    });
}




