import React from "react";

class EggSearch extends React.Component{
    eggSearch(){
        let select=document.querySelector("#egg");

        fetch("http://localhost:80/api/egg/"+select.value)
        .then((res)=>{
            return res.json();
        }).then((processed)=>{
            let reporting=document.querySelector("#reportingArea");
            reporting.setAttribute("class", select.value);
            
            if(processed.error){
                reporting.innerHTML=processed.error;
            }else{
                processed
                .sort((a, b)=>{
                    return a.id - b.id;
                })
                .map((v, index)=>{
                    if(index=== 0){
                        reporting.innerHTML= v.name;
                    }else{
                        if(v.formName){
                            reporting.innerHTML+= "<br>" +v.name + "(" + v.formName + ")";
                        }else{
                            reporting.innerHTML+= "<br>" + v.name;
                        }
                    }
                }); 
            }
        });
    }   

    render(){
        return(
            <div>
                <h1>Search By Egg Group</h1>
                <select id="egg"  size="0" onChange={this.eggSearch}>
                    <option value=""></option>
                    <option value="Amorphous">Amorphous</option>
                    <option value="Bug">Bug</option>
                    <option value="Dragon">Dragon</option>
                    <option value="Fairy">Fairy</option>
                    <option value="Field">Field</option>
                    <option value="Flying">Flying</option>
                    <option value="Grass">Grass</option>
                    <option value="Human-Like">Human-like</option>
                    <option value="Mineral">Mineral</option>
                    <option value="Monster">Monster</option>
                    <option value="Water1">Water 1</option>
                    <option value="Water2">Water 2</option>
                    <option value="Water3">Water 3</option>
                    <option value="Ditto">Ditto</option>
                    <option value="Undiscovered">Undiscovered</option>
                </select>
            </div>
        );
    }
}

export default EggSearch;