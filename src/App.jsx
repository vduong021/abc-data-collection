import React, {Component, useState} from "react";
import render from 'react-dom';
import MainContainer from './containers/MainContainer.jsx';
import './styles.css';



// const App = () => {
class App extends Component {
  render () {
    console.log('im in the app')
    return (
    <div className="appDiv">
      <div>
        <h1>ABC Data Collection</h1>
      </div>
  
      <MainContainer />
    </div>
    )
  }
};

export default App;