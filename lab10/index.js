const Express= require("express");
const App= Express();
const port= 5000;

const cors=require("cors");
App.use(cors());

const Database= require("./database.js");
let database= new Database();

const Pokedex= require("pokedex.js");
const pokedex= new Pokedex("en");

App.use("/", Express.static("client/build"));

App.get("/api/generation/:generation", (req, res)=>{
    let result={"error": "Could not find generation/region"};

    let generation=pokedex.generation(req.params.generation).get();
    if(generation != null && generation != "undefined" && generation != "[]"){
        result=JSON.parse(generation);
    }

    res.json(result);
});

App.get("/api/name/:name", (req, res)=>{
    let result={"error": "Could not find name"};

    let name=pokedex.name(req.params.name).get();
    if(name != null && name != "undefined" && name != "[]"){
        result=JSON.parse(name);
    }

    res.json(result);
});

App.get("/api/id/:id", (req, res)=>{
    let result={"error": "Could not find ID"};

    let id= pokedex.id(req.params.id).get();
    if(id != null && id != "undefined" && id !="[]"){
        result=JSON.parse(id);
        console.log(result);
    }

    res.json(result);
});

App.get("/api/type/:type", (req, res)=>{
    let result={"error": "Could not find type"};

    let type= pokedex.type(req.params.type).get();
    if(type != null & type != "undefined" && type != "[]"){
        result=JSON.parse(type);
    }

    res.json(result);
});

App.get("/api/type/:type/type2/:type2", (req, res)=>{
    let result={"error": "Could not find this type combination"};
    
    let type= pokedex.type(req.params.type).type(req.params.type2).get();

    if(type != null & type != "undefined" && type != "[]"){
        result=JSON.parse(type);
    }

    res.json(result);
})


App.get("/api/egg/:egg", (req, res)=>{
    let result={"error": "Could not find Egg Group"};

    let egg=pokedex.eggGroup(req.params.egg).get();
    if(egg != null && egg != "undefined" && egg != "[]"){
        result=JSON.parse(egg);
    }

    res.json(result);
});

App.get("/api/pokedex/find/:find", (req, res)=>{
    let result={"error": "Could not get to work"};

    database.finder(req.params.find)
    .then((pokemon)=>{
        if(pokemon != null){
            result=pokemon;
        }
        
        res.json(result);
    });
});

App.get("/api/pokedex/all", (req, res)=>{
    let result={"error": "could not connect"};

    let pokemon=pokedex.get();
    if(pokemon != null && pokemon != "undefined" && pokemon != "[]"){
        result=JSON.parse(pokemon);
    }    

        res.json(result);
});

App.get("/api/pokedex/caught", (req, res)=>{
    let result={"error": "Have not caught anything"};

    database.printList()
    .then((pokemon)=>{
        if(pokemon != null){
            result=pokemon;
        }

        res.json(result);
    });
});

App.get("/api/pokedex/notCaught", (req, res)=>{
    let result={"error": "Could not connect"};

    let all=pokedex.get();
    if(all != null && all != "undefined" && all != "[]"){
        all=JSON.parse(all);
    }
    
    database.printList()
    .then((pokemon)=>{
        all.map((v, index)=>{
            pokemon.forEach((element) => {
                if(v.name.toLowerCase() === element.name.toLowerCase()){
                    v.splice(index, 1);
                }
            });
        });
        result=all;

        res.json(result);
    });
});

App.post("/api/pokedex/add/:add", (req, res)=>{
    console.log("entered server");
    let result={"error": "Could not be added"};

    result= database.add(req.params.add);
    res.json(result);
});

App.listen(port, () => {
    // Let the user know the server is running
    console.log("Server running!")
});