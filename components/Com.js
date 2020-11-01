import React ,{Component} from 'react';
import './Com.css';
import './Demo.css';
class Com extends Component{

 state ={
   name:'def',
     count :0,
 };
 constructor(){
   super();
   this.show = this.show.bind(this);
   this.inc = this.inc.bind(this);
   this.dec = this .dec.bind(this);
 }
  render(){
var timr;
    return(
      <div id="fool">
<h1 id="Demo">hello {1 + 2} {this.state.name}</h1>
<h2>hi</h2>
<button onClick={this.show}>change</button>
<div>timr={this.state.count}</div>

      <div id="count">{this.state.count}</div>
      <button id="btn" onClick={this.inc}>Increment</button>
      <button id="btn" onClick={this.dec}>Decrement</button>
      </div>
    );
  }

  show(){
this.state={
  name:'abc',
}
this.setState({name: this.state.name})

  }
  dec(){
    this.setState({count: this.state.count - 1})
    console.log(this.state.count);
  }
  inc(){
    this.setState({count:this.state.count+1})
    console.log(this.state.count);
  }
}

export default Com;
