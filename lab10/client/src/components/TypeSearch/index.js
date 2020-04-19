import React from "react";

class TypeSearch extends React.Component{
    typeSearch(){
        let select=document.querySelector("#type");
        let select2=document.querySelector("#type2");

        if(select2.value === ""){
            fetch("http://localhost:80/api/type/"+select.value)
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
        }else{
            fetch("http://localhost:80/api/type/"+select.value+"/type2/"+select2.value)
            .then((res)=>{
                return res.json();
            }).then((processed)=>{
                let reporting=document.querySelector("#reportingArea");
                reporting.setAttribute("class", select.value+"/"+select2.value);

                if(processed.error){
                    reporting.innerHTML= processed.error;
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

    } 
    
    toggle(e){
        let type=document.querySelector("#type2");
        if(e.target.checked === true){
            type.setAttribute("disabled", true);
        }else{
            type.removeAttribute("disabled");
        }
    }

    render(){
        return(
            <div>
                <h1>Search By Type</h1>
                <label className="switch">
                    Types
                    <input type="checkbox" onClick={this.toggle}/>
                    <span className="slider round"></span>
                </label>

                <select id="type"  onChange={this.typeSearch}>
                    <option value=""></option>
                    <option value="Fire">Fire</option>
                    <option value="Water">Water</option>
                    <option value="Grass">Grass</option>
                    <option value="Electric">Electric</option>
                    <option value="Ice">Ice</option>
                    <option value="Steel">Steel</option>
                    <option value="Rock">Rock</option>
                    <option value="Ground">Ground</option>
                    <option value="Ghost">Ghost</option>
                    <option value="Psychic">Psychic</option>
                    <option value="Dark">Dark</option>
                    <option value="Bug">Bug</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Normal">Normal</option>
                    <option value="Dragon">Dragon</option>
                    <option value="Flying">Flying</option>
                    <option value="Fairy">Fairy</option>
                    <option value="Poison">Poison</option>
                </select>

                <select id="type2"  onChange={this.typeSearch}>
                    <option value=""></option>
                    <option value="Fire">Fire</option>
                    <option value="Water">Water</option>
                    <option value="Grass">Grass</option>
                    <option value="Electric">Electric</option>
                    <option value="Ice">Ice</option>
                    <option value="Steel">Steel</option>
                    <option value="Rock">Rock</option>
                    <option value="Ground">Ground</option>
                    <option value="Ghost">Ghost</option>
                    <option value="Psychic">Psychic</option>
                    <option value="Dark">Dark</option>
                    <option value="Bug">Bug</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Normal">Normal</option>
                    <option value="Dragon">Dragon</option>
                    <option value="Flying">Flying</option>
                    <option value="Fairy">Fairy</option>
                    <option value="Poison">Poison</option>
                </select>
            </div>
        );
    }
}

export default TypeSearch;