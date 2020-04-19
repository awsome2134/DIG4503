import React from 'react';
import './App.css';
import TableOne from "./components/TableOne";
import NameSearch from "./components/NameSearch";

class App extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      "table": []
    };
  }

  exampleFunction = (results) => {
    this.setState({"table": results});
  }

  render(){
    console.log(this.state.table);
    return (
      <div>
        <h2>Seach</h2>
        <NameSearch callback ={this.exampleFunction} />
        <TableOne table={this.state.table} />
      </div>
    );
  }
}

export default App;
