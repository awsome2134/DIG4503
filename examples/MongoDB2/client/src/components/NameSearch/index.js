import React from "react";

class NameSearch extends React.Component{
    movieSearch= () => {
    let input= document.querySelector("#movieInput");
    let inputValue= input.value;

    if(inputValue.length === 0){
      inputValue ="~";
    }

    fetch("http://localhost:80/movies/title/" + input.value)
    .then((res) => {return res.json();})
    .then((processed) => {
      console.log(processed);
    });
  }

  render(){
      return(
        <input type="text" id="movieInput"  onKeyUp={this.movieSearch}/>
      );
  }
}

export default NameSearch;
