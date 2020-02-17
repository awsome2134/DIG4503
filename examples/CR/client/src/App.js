import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreSearch from "./components/ScoreSearch";
import NameSearch from "./components/NameSearch"
import ReportingArea from './components/ReportingArea';

class App extends React.Component{
  render(){
    return (
      <div>
        <ScoreSearch />
        <NameSearch />
        <ReportingArea />
      </div>
    );
  }
}

export default App;
