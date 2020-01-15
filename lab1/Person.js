const chalk= require("chalk");
class Person {
    
    constructor(name, color){
        this.name=name;
        this.favoriteColor=color;
    }

    
    speak(){
        console.log(chalk.keyword(this.favoriteColor)(this.name+"'s favorite color is "+this.favoriteColor));
    }
}

module.exports=Person;