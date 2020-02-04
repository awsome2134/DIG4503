const Express=require("express");
const App= Express();
const faker=require("faker");
const port= 80;

const Person=require("./Person.js");
let p=new Person("Myles", "blue");

let people= [];
for(let i=0; i<99; i++){
   people.push(new Person(faker.name.findName(), faker.commerce.color()));
}

App.get("/person/color/:color", (req, res) => {
    people.forEach((value)=>{
        if(value.color==req.params.color){
            res.send(value);
        }
    });
    res.send("this color is not in our database");
});

App.get("/person/name/:name", (req, res)=>{
    people.forEach((value)=>{
        if(value.name==req.params.name){
            res.send(value);
        }
    });
    res.send("this name is not in our database");

});

App.listen(port, ()=>{
    console.log("Server running!");
});