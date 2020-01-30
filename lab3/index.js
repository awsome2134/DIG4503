const Express= require("express");
const App= Express();
const port= 80;

App.get("/", function(Request, Response){
    Response.send("Hello World");
});

//App.use(Express.static("public"));
App.use("/public", Express.static("public"));

App.listen(80, ()=>{
    console.log("Server running");
} );