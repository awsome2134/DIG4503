//server setup
const Express= require("express");
const App= Express();
const port= 80;

const MongoDB= require("mongodb");
const MongoClient= MongoDB.MongoClient;
let collection= null;

const URL= "mongodb+srv://myleswaite:e1bX4SazihovUutw@cluster0-tc9sb.mongodb.net/";
MongoClient.connect(URL, (err, connection) => {
    if(err){
        throw err;
    }

    let database= connection.db("DIG4503-78");
    collection= database.collection("Movies");
});

//middleware
const Cors= require("cors");
App.use(Cors());

App.get("/movies/title/:title", (req, res) => {
    let result={"error": "Cannot find title"};

    if(collection != null){
        collection.find({"title": new RegExp(req.params.title)})
        .limit(6)
        .toArray()
        .then((cursorArray) => {
            if(cursorArray.length != 0){
                result= cursorArray;
            }

            res.json(result);
        });
    }else{
        res.json(result);
    }
});

App.listen(port, () => {
    console.log("server is running");
})