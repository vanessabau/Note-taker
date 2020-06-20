//Dependencies
const util = require("util");
const path = require("path");
const fs = require("fs");
const uuidv1 = require('uuidv1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//Create class to hold methods for handling our data being stored in db.json
class Db {
    read(){
        return readFileAsync("db/db.json", "utf8");
    }

    write(notes){
        return writeFileAsync("db/db.json", JSON.stringify(notes));
    }

    getNotes(){
        return this.read().then(notes =>{
            console.log(notes);
            let parsed;
            parsed = [].concat(JSON.parse(notes))
            return parsed;
        })
    }

    addPost(note){
        //console.log(note);
       // { title: '1', text: '2' }
       const { title, text } = note;

       const newNote = { title, text, id: uuidv1() }
       //console.log(newNote);
        
       return this.getNotes()
       .then(notes => [...notes, newNote])
       .then(updatedNotes => this.write(updatedNotes))
       .then(() => newNote);
        
    }

    deleteNote(id){
        console.log(id);
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== id))
        .then(filteredNotes => this.write(filteredNotes))
    }
}

//Export Db class
module.exports = new Db();