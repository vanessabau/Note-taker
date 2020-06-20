//Dependencies
//Require access to our logic.js file which has methods to handle data stored in db.json
const dbRouter = require("../db/logic");

//Export methods to handle notes api from logic.js which handles data stored in db.json
module.exports = function(app){
    //Get api of notes
    app.get('/api/notes', function(req, res){
        const notes = dbRouter.getNotes().then(notes =>{
        res.json(notes);
        });
    });

    //Post to our api of notes
    app.post('/api/notes', function(req, res){
        dbRouter.addPost(req.body).then(note => res.json(note)).catch(err => res.status(500).json(err))
    });

    //Delete notes depending on their id
    app.delete('/api/notes/:id', function(req, res){
        dbRouter
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
    })
}




