import React from "react";

class NameSearch extends React.Component{

    readName(event){
        event.preventDefault();
        let input= document.querySelector("#name");

        fetch("/api/movies/name/"+input.value)
        .then((res)=>{
            return res.json();
        }).then((processed)=>{
            let reporting =document.querySelector("#reportingArea");

            if(processed.error){
                reporting.innerHTML= processed.error;
            }else{
               reporting.innerHTML=processed.name; 
            }
        });
    }

    render(){
        return (
            <div>
                <h2>Name</h2>
                <form onSubmit={this.readName}>
                    <input type="text" id="name"></input>
                    <button>Name</button>
                </form>
            </div>
        );
    }
}
export default NameSearch;