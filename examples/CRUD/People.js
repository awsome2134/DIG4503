
const Person=require("./Person.js");
const faker=require("faker");

class People{

    constructor(){
         this.people=[];

        for(let i=0; i<99; i++){
            let name = faker.name.findName();
            let color = faker.commerce.color();
            this.people.push(new Person(name, color));
        }
    }

    readColor(req){
    let result={"error": "Could not find!"};
    this.people.forEach((value)=> {
        if(value.color == req.params.color) {
            res.send(value);
        }
    });

    if(result.error){
        result.push({"error":"Can't find!"});
    }else{
        console.log(req.path);
    }
        return result;
    }

    readName(req){
        let result={"error": "Could not find!"};
        this.people.forEach((value)=> {
        if(value.color == req.params.name) {
            res.send(value);
        }
    });

    if(result.error){
        console.log(req.path);
    }else{
        console.log(req.path);
    }
        return result;
    }
}

module.exports= People;