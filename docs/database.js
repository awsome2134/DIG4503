const MongoCLient = require("mongodb").MongoClient;
const URL="mongodb+srv://my922299:Awsome2134@pokemonlist-cjrhm.mongodb.net/test";

class Database{
    constructor(){
        this.collection= null;
        this.connection= null;

        MongoCLient.connect(URL, (error, connection)=>{
            if(error){
                throw error;
            }

            this.connection = connection;
            let database= connection.db("Pokedex");
            this.collection=database.collection("Caught");
        });
    }

    finder(all){
        if(this.collection != null){
            return this.collection.find({"name": new RegExp(all)}).toArray();
        }
    }

    printList(){
        if(this.collection != null){
            return this.collection.find().toArray();
        }
    }

    add(pokemon){
        console.log("entered databse");
        let myOBJ={"name": pokemon};
        if(this.collection != null){
            this.collection.insertOne(myOBJ);
        }
    }
}

module.exports= Database;