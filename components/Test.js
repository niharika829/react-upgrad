import React, {Component} from 'react';

class Test extends Component{
  state={
    name:'abc',
    age:21,
    flag:'true'
  }
  constructor(){
    super();
    this.test=this.test.bind(this);

  }
  render(){
    return(
      <div>
      <p id="para">{this.state.age}</p>
      <button onClick={this.test}>change</button>
      </div>
    );
  }
  test(){
    var element = document.getElementById("para");
    if(this.flag === true){
      element.style.backgroundColor = "yellow";
      this.flag =false;
    }else{
      element.style.backgroundColor="red";
      this.flag=true;
    }
    }
    }

  export default Test
