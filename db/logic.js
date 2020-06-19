//Dependencies
const util = require("util");
const path = require("path");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//Create read and write methods
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
    
}

module.exports = new Db();