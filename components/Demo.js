import  React, {Component} from 'react';
import './Demo.css';

 class Demo extends Component{
   state={
     count :0,
   };
   constructor(){
     super();
     this.inc = this.inc.bind(this);
     this.dec = this .dec.bind(this);
   }
   render(){
     return(
       <div>
       <div id="count">{this.state.count}</div>
       <button id="btn" onClick={this.inc}>Increment</button>
       <button id="btn" onClick={this.dec}>Decrement</button>
       </div>
     );
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
 export default Demo;
