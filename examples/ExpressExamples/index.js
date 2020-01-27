const Express= require("express");
const App=Express();
const port=8080;

const Person= require("./Person.js");

let db= [1, 5, 24, 25];

let person= new Person("Myles", "Magenta");

App.get("/", function(Request, Response){
    Response.send(person.getColor());
});

App.get("/book", function(Request, Response){
    Response.send("Book");
});

App.listen(port, function(){
    console.log("Server running");
});