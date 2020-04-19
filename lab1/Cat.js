const beep= require("beepbeep");
const chalk= require("chalk");

class Cat{
    constructor(color, age){
        this.color= color.toLowerCase();
        this.age= age;
    }

    speak(){
       console.log(chalk.keyword(this.color)("This cat is "+this.age+" years old")); 
       beep(5);
    }
}

module.exports= Cat;