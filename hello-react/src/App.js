import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Gnb from './components/Gnb.js'
import Main from './components/Main.js'
import TmpProtection from "./components/TmpProtection.js"

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Router>
            <div>
            <Gnb/>
            <Switch>
                <Route exact path={"/TmpProtection"} component={TmpProtection}/>
            </Switch>
            </div>
        </Router>
        <Main/>
      </React.Fragment>
    );
  }
}

export default App;
