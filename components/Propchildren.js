import React ,{Component} from 'react';
class Propchildren  extends Component{
  render(){
    console.log(this.props);
    return(
      <div>
<p>name: {this.props.children},age: {this.props.age}</p>
<p>name: {this.props.name},age: {this.props.age}</p>
</div>
    );
  }
}
export default Propchildren
