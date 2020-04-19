const Express= require("express");
const App= Express();
const port= 80;

const pokemon= require("json-pokemon");
const chalk= require("chalk");
const cors=require("cors");

App.use(cors());

App.use("/", Express.static("client/build"));

App.get("/api/id/:id", (req, res)=>{
    let result={"error": "ID not found!"};

    pokemon.forEach((value)=>{
        if(req.params.id == value.id){
            result= value;
        }
    });
    if(result.error=="ID not found!"){
        console.log(chalk.red(req.path));
    }else{
        console.log(chalk.green(req.path));
    }
    res.json(result);
});

App.get("/api/name/:name", (req, res)=>{
    let result={"error": "Name not found!"};

    pokemon.forEach((value)=>{
        if(req.params.name == value.name){
            result= value;
        }
    });
    if(result.error=="Name not found!"){
        console.log(chalk.red(req.path));
    }else{
        console.log(chalk.green(req.path));
    }
    res.json(result);
});

App.listen(port, ()=>{
    console.log("server is running");
});