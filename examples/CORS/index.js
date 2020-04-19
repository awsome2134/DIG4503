const Express= require("express");
const App= Express();
const fs= require("fs");
const port= 80;

const contents= fs.readFileSync("database.json");
let database=JSON.parse(contents);

const cors= require("cors");
App.use(cors());

App.get("/CORS/name/:name", (req, res)=>{
    let result={"error": "Could not find Name!"};

    res.json(result);
});

App.get("/CORS/score/:score", (req, res)=>{
    let result={"error": "Could not find Score!"};

    res.json(result);
});

App.get("/CORS/episode/:episode", (req, res)=>{
    let result={"error": "Could not find number of Episodes!"};

    res.json(result);
});

App.listen(port, ()=>{

});