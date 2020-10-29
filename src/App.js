import React from 'react';
import logo from '././imgs/smlerlogo.png';
import bgl from '././imgs/bg2.png';
import './App.css';
import Chip from '@material-ui/core/Chip';
import TabNav from './components/TabNav'


class App extends React.Component {


  render(){

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo"/>
        <p>
        <Chip size="small" label="Account Address appears when logged in" />
        </p>
      </header>
<TabNav/>

    </div>
  );
  }
}

export default App;
