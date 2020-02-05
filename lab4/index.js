const chalk=require("chalk");
const Express=require("express");
const App= Express();
const Pokemon=require("json-pokemon");
const port=80;

App.get("/id/:id/", (req, res)=>{

    let result="This Id is invalid"; 

    Pokemon.forEach((value)=>{
        if(value.id == req.params.id){
            result=value;
            console.log(chalk.green(req.path));
        }
    });
        
        if(result=="This Id is invalid"){
            console.log(chalk.red(req.path));
        }
        res.send(result);
});

App.get("/name/:name", (req, res) =>{

let result="this name is not valid";

    Pokemon.forEach((value)=>{
        if(value.name == req.params.name){
            result=value;
            console.log(chalk.green(req.path));
        }
    });
    if(result=="this name is not valid"){
        console.log(chalk.red(req.path));
    }
    res.send(result);
});


App.listen(port, ()=>{
    console.log("Server Running!");
})
