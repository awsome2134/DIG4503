const Cat =require("./Cat.js");
const chalk= require("chalk");

class Lion extends Cat{
    constructor(color, age, weight){
        super(color, age);
        this.weight= weight;
    }
}

module.exports= Lion;