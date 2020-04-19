const Express = require("express");
const App = Express();
const port = 80;

const People = require("./People.js");
let people = new People();

App.use("/", Express.static("public"));
App.get("/people/color/:color", (req, res)=>{
    res.send(people.readColor(req));
});

App.get("/people/name/:name", (req, res) => {
            res.send(people.readName(req));
    });

App.post("/people/person/:name/:color", (req, res)=>{
    res.send(req.params);
});

App.listen(port, () => {
    console.log("Server running!");
});