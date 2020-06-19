const dbRouter = require("../db/logic");
// const { delete } = require("./htmlRoutes");
const router = require("express").Router();

// router.get('/notes', (req, res) => {
//     dbRouter
//     .getNotes()
//     .then(notes => res.json(notes))
//     .catch( err => res.status(500).json(err))    
// });

// router.post('/notes'), function(req, res){

// }

module.exports = function(app){
    app.get('/api/notes', function(req, res){
        const notes = dbRouter.getNotes().then(notes =>{
        console.log(notes);
        res.json(notes);
        });
        
        // dbRouter.getNotes()
        // .then(notes.json(notes))
    });

    app.post('/api/notes', function(req, res){
        return writeFileAsync("../db/db.json", JSON.stringify(req.body));
    });

    // router.delete('/api/notes/:id', function(query parameter with id of note to delete.){})
}



//module.exports = router;
