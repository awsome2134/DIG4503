class Person{
    constructor(name, color){
        this.name= name;
        this.color= color.toLowerCase();
    }

    getName(){
        return this.name;
    }

    getColor(){
        return this.color;
    }
}

module.exports= Person;