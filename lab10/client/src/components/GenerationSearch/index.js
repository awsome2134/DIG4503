import React from "react";

class GenerationSearch extends React.Component{

    search(){
        let select=document.querySelector("#select");

        fetch("http://localhost:80/api/generation/"+select.value)
        .then((res)=>{
            return res.json();
        }).then((processed)=>{
            let reporting=document.querySelector("#reportingArea");
            
            if(processed.error){
                reporting.innerHTML=processed.error;
            }else{
                processed.map((v, index)=>{
                    if(index=== 0){
                        reporting.innerHTML= v.name;
                    }else{
                        reporting.innerHTML+= "<br>" +v.name
                    }
                }); 
            }
        });
    }   

    render(){
        return(
            <div>
                <h1>Search By Generation/Region</h1>
                <select id="select" onChange={this.search}>
                    <option value=""></option>
                    <option value="1">(1)Kanto</option>
                    <option value="2">(2)Johto</option>
                    <option value="3">(3)Hoenn</option>
                    <option value="4">(4)Sinnoh</option>
                    <option value="5">(5)Unova</option>
                    <option value="6">(6)Kalos</option>
                    <option value="7">(7)Alola</option>
                    <option value="8">(8)Galar</option>
                </select>
            </div>
        );
    }
}

export default GenerationSearch;
