import React from "react";

class NameSearch extends React.Component{

    movieSearch = () => {

        // Get the input's value
        let inputValue = document.querySelector('#movieInput').value;

        // Test if year is an empty string
        // If so, change it to a value
        if(inputValue.length === 0) {
            inputValue = "~";
        }

        // Look for movies based on the year
        fetch("http://localhost:80/movies/title/" + inputValue)
        .then((res) => { return res.json() })
        .then((processed) => {
            // Call the callback function given to the class component
            this.props.callback(processed);
        });

    }

    render(){
        return (
            <input type="text" id="movieInput"  onKeyUp={this.movieSearch} />
        )}
}

export default NameSearch;