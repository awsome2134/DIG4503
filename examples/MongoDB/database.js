const MongoClient= require("mongodb").MongoClient;
const URL= "mongodb+srv://myleswaite:e1bX4SazihovUutw@cluster0-tc9sb.mongodb.net/";

class Database{

    constructor(){
        this.collection=null;
        this.connection=null;

        MongoClient.connect(URL, (err, connection) =>{
            if(err){
                throw err;
            }
        });

        this.connection= connection;

        let database = connection.db("DIG4503-78");
        this.collection= database.collection("Movies");
    }

    findScore(score){
        if(this.collection != null){
            this.collection.findOne({
                "score": score
            }, {}, (error, result) =>{
                return result;
            });
        }else{
            return null;
        }
    }
}

module.exports= Database;