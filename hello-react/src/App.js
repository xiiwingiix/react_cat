import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Gnb from './components/Gnb.js'
import Main from './components/Main.js'
import Login from './components/Login.js'
import Join from './components/Join.js'
import Foster from "./components/Foster.js"
import Adoption from "./components/Adoption.js"
import SecondUse from './components/SecondUse.js'
import Recommendation from './components/Recommendation.js'
import Talktalk from './components/Talktalk.js'

class App extends Component{
  render(){
    return(
      <Fragment>
        <Router>
          <Gnb/>
          <Switch>
            <Route path="/Foster.js" component={Foster}/>  
            <Route exact path="/" component={Main}/>
            <Route path="/main.js" component={Main}/>
            <Route path="/adoption.js" component={Adoption}/>
            <Route path="/secondUse.js" component={SecondUse}/>
            <Route path="/recommendation.js" component={Recommendation}/>
            <Route path="/talktalk.js" component={Talktalk}/>
            <Route path="/login.js" component={Login}/>
            <Route path="/join.js" component={Join}/>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
