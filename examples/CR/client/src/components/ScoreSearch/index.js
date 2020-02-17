import React from "react";

class ScoreSearch extends React.Component{

    readScore(event){
        event.preventDefault();
        let input= document.querySelector("#num");

        fetch("/api/movies/score/"+input.value)
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
                <h2>Score</h2>
                <form onSubmit={this.readScore}>
                    <input type="text" id="num"></input>
                    <button>Score</button>
                </form>
            </div>
        );
    }
}
export default ScoreSearch;