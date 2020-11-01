import React ,{Component} from 'react';
import FormBody from './FormBody';
class Display_Remove extends Component{
  state={
    flag:true,
  };
  constructor(){
    super();
    this.display=this.display.bind(this);

  }
  render(){
    return(
      <div>
      {this.display()}
      <button onClick={this.rem}>remove</button>
      </div>
    );
  }
rem= () =>{
  this.setState({flag:false});
}
display(){
  if(this.state.flag === true){
    return <FormBody/>
  }
  else{
    return <h1>nothing</h1>
  }
}

}
export default Display_Remove
