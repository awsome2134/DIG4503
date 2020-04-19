import React from "react";
import GenerationSearch from "./components/GenerationSearch";
import NameSearch from "./components/NameSearch";
import IdSearch from "./components/IdSearch";
import TypeSearch from "./components/TypeSearch";
import EggSearch from "./components/EggGroupSearch";
import Home from "./components/Home";
import CaughtList from "./components/CaughtList";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.changeTask = this.changeTask.bind(this);
    this.state={"view": ""};
  }

  changeTask(selection){
    this.setState({"view": selection});
  }

  render(){
    return (
      <div className="App">
        { this.state.view === "generation" ?
              <GenerationSearch />
            : this.state.view === "name" ?
            <NameSearch />
            : this.state.view === "id" ?
            <IdSearch />
            : this.state.view === "type" ?
            <TypeSearch />
            : this.state.view === "egg" ?
            <EggSearch />
            : this.state.view === "caught" ?
            <CaughtList />
            : <Home />
            }

        <div id="reportingArea"></div>
        <nav id="navigation" className="btn-group">
          <button className="buttonClass" onClick={() =>this.changeTask()}>Home</button>
          <button className="buttonClass" onClick={() =>this.changeTask("id")}>Id</button>
          <button className="buttonClass" onClick={() =>this.changeTask("name")}>Name</button>
          <button className="buttonClass" onClick={() =>this.changeTask("type")}>Type</button>
          <button className="buttonClass" onClick={() =>this.changeTask("generation")}>Generation</button>
          <button className="buttonClass" onClick={() =>this.changeTask("egg")}>Egg Group</button>
          <button className="buttonClass" onClick={() =>this.changeTask("caught")}>Caught</button>
        </nav>
      </div>
    );
  }
} 

export default App;
