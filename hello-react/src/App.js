import React,{Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Gnb from './components/Gnb.js'
import Main from './components/Main.js'

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Gnb/>
        <Main/>
      </React.Fragment>
    );
  }
}

export default App;
