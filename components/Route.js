import React,{Component} from 'react';
import {BrowserRouter as Router, Route}from 'react-router-dom';
import Demo from './Demo.js';
import Com from './Com.js';

class RouterComponent extends Component{
  render(){
    return(
      <Router>
      <Route path="/home" component={Demo}/>
      <Route path="/about" component={Com}/>
      </Router>
    );
  }
}
export default RouterComponent;
