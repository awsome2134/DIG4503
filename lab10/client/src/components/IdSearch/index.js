import React from "react";

class IdSearch extends React.Component{

    idSearch(){
        let input=document.querySelector("#id");

        fetch("http://localhost:5000/api/id/"+input.value)
        .then((res)=>{
            return res.json();
        }).then((processed)=>{
            let reporting=document.querySelector("#reportingArea");
            
            if(processed.error){
                reporting.innerHTML=processed.error;
            }else{
                reporting.innerHTML=
                    "<strong>ID:</strong> " + processed[0].id + "<br>" +
                    "<strong>Name:</strong>" + processed[0].name + "<br>" +
                    "<strong>Type(s):</strong> " + processed[0].type + "<br>" +
                    "<strong>Abilities:</strong><br>";
                    processed[0].ability.map((v)=>{
                        if(v.hidden === true){
                            reporting.innerHTML+= "<em>Hidden:</em><br> " + v.name + "<br>";
                        }else{
                            reporting.innerHTML+= v.name + "<br>";
                        }
                    });
                    reporting.innerHTML+=
                    "<strong>Egg Group(s):</strong> " + processed[0].eggGroup + "<br>" +
                    "<strong>Base Stats:</strong><br>" +
                    "Health: " + processed[0].baseStats.H + "<br>" +
                    "Attack: " + processed[0].baseStats.A + "<br>" +
                    "Defense: " + processed[0].baseStats.B + "<br>" +
                    "Special Attack: " + processed[0].baseStats.C + "<br>" +
                    "Special Defense: " + processed[0].baseStats.D + "<br>" +
                    "Speed: " + processed[0].baseStats.S+ "<br>";
            }
        }); 
    }   

    render(){
        return(
            <div>
                <h1>Search By ID</h1>
                <label htmlFor="id">Pokemon Id #: </label>
                <input type="number" id="id" name="id"/>
                <button value="submit" onClick={this.idSearch}>Search</button>
            </div>
        );
    }
}

export default IdSearch;