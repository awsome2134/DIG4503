const Express= require("express");
const App=Express();
const port= 80;

const fs=require("fs");
let database= JSON.parse(fs.readFileSync("file.json"));

App.use("/", Express.static("client/build"));

App.get("/api/movies/score/:score", (req, res)=>{
    let result={"error": "Not found!"};

    database.forEach((value)=>{
        if(req.params.score == value.score){
            result= value;
        }
    });
    console.log(result);
    res.json(result);
});

App.get("/api/movies/name/:name", (req, res)=>{
    let result={"error": "Not found!"};

    database.forEach((value)=>{
        if(req.params.name == value.name){
            result= value;
        }
    });

    res.json(result);
});

App.post("/api/movies/:name/:score", (req, res)=>{
    let result= {"name": req.params.name,
                 "score": req.params.score
                };

    database.push(result);

    fs.writeFileSync("file.json", JSON.stringify(database));

    res.json(result);
});

App.listen(port, ()=>{
    console.log("server is running");
});