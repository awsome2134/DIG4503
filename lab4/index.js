const chalk=require("chalk");
const Express=require("express");
const App= Express();
const Pokemon=require("json-pokemon");
const port=80;

App.get("/id/:id/", (req, res)=>{
    console.log(Pokemon.getPokemonById(1));
    if(Pokemon.getPokemonById(req.params.id) == null){
        res.send(chalk.red("this Id is not valid"));
    }else{
        res.send(chalk.green(req.params));
    }
});

App.get("/name/:name", (req, res) =>{
    if(Pokemon.getPokemonByName(req.params.name) == null){
        res.send(chalk.red("this Id is not valid"));
    }else{
        res.send(chalk.green(req.params));
    }
    
})


App.listen(port, ()=>{
    console.log("Server Running!");
})
