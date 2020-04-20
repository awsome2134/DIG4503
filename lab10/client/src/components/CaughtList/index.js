import React from "react";
import "./index.css";

class CaughtList extends React.Component{
    constructor(props){
        super(props);
        this.show=this.show.bind(this);
        this.search=this.search.bind(this);
    }

    search(){
        let input=document.querySelector("#input");
        let input2=document.querySelector("#add");
        let button=document.querySelector("#insert");

        input.removeAttribute("disabled");
        input2.style.display= "none";
        button.style.display= "none";

        if(input.value !== "" && input.value !== null && input.value !== "undefined" && input.value !== " "){
            fetch("http://localhost:5000/api/pokedex/find/" + input.value)
            .then((res)=>{
                return res.json();
            }).then((processed)=>{
                let reporting=document.querySelector("#reportingArea");
                processed.map((v, index)=>{
                    if(index === 0){
                        reporting.innerHTML=v.name + "<br>";
                    }else{
                        reporting.innerHTML+= v.name + "<br>";
                    }
                });
            });
        }
    }

    show(){
        let input=document.querySelector("#input");
        let input2=document.querySelector("#add");
        let button=document.querySelector("#insert");

        input.setAttribute("disabled", "true");
        input2.style.display= "none";
        button.style.display= "none";

        fetch("http://localhost:5000/api/pokedex/all")
        .then((res)=>{
            return res.json();
        }).then((processed)=>{
            let reporting= document.querySelector("#reportingArea");
            processed.map((v, index)=>{
                if(index === 0){
                    reporting.innerHTML= v.name + "<br>";
                }else{
                    reporting.innerHTML+= v.name += "<br>";
                }
            });
        });
    }

    add(){
        let input=document.querySelector("#add");
        let button=document.querySelector("#insert");
        input.style.display= "block";
        button.style.display= "block";
    }

    insert(){
        let input=document.querySelector("#add");

        console.log(input.value);
        fetch("http://localhost:5000/api/pokedex/add/" + input.value, {"method": "POST"})
        .then((res)=>{
            return res.json();
        })
        .then((processed)=>{
            console.log(processed);
            let reporting=document.querySelector("#reportingArea");
            reporting.innerHTML= processed;
        });
    }

    caught(){
        let input=document.querySelector("#input");
        let input2=document.querySelector("#add");
        let button=document.querySelector("#insert");

        input.setAttribute("disabled", "true");
        input2.style.display= "none";
        button.style.display= "none";

        fetch("http://localhost:5000/api/pokedex/caught")
        .then((res)=>{
            return res.json();
        }).then((processed)=>{
            let reporting=document.querySelector("#reportingArea");
            processed.map((v, index)=>{
                if(index === 0){
                    reporting.innerHTML= v.name + "<br>";
                }else{
                    reporting.innerHTML+= v.name + "<br>";
                }
            });
        });
    }

    notCaught(){
        let input=document.querySelector("#input");
        let input2=document.querySelector("#add");
        let button=document.querySelector("#insert");

        input.setAttribute("disabled", "true");
        input2.style.display= "none";
        button.style.display= "none";

        fetch("http://localhost:5000/api/pokedex/notCaught")
        .then((res)=>{
            return res.json();
        }).then((processed)=>{
            let reporting=document.querySelector("#reportingArea");
            processed.map((v, index)=>{
                if(index === 0){
                    reporting.innerHTML= v.name + "<br>";
                }else{
                    reporting.innerHTML+= v.name + "<br>";
                }
            });
        });
    }

    render(){
        return(
            <div>
                <h2>Show Caught Pokemon</h2>
                <button value="pokemonList" onClick={this.show}>All Pokemon</button>
                <button value="caught" onClick={this.caught}>Pokemon Caught</button>
                <button value="notCaught" onClick={this.notCaught}>Uncaught Pokemon</button>
                <button value="addPokemon" onClick={this.add}>Add Pokemon to List</button>
                <button value="search" onClick={this.search}>Search for Pokemon</button>
                <br/>
                <input type="text" id="input" disabled onChange={this.search} />
                <input type="text" id="add"/>
                <button id="insert" value="Add Pokemon" onClick={this.insert}>Add Pokemon</button>
            </div>
        );
    }
}

export default CaughtList;