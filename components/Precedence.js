import React ,{Component} from 'react';
class Precedence extends Component{
  constructor(){
    super();
    console.log("constructor comes first");
  }
  render(){

  console.log("render comes second");
return(
  <h1>Precedence</h1>
);
  }
componentDidMount(){
    console.log("ComponentDidMount comes third");
}

  }
export default Precedence
