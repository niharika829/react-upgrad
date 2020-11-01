import React ,{Component} from 'react';
import Propchildren from'./Propchildren.js';
class Propparent extends Component{
  render(){
    return(
    <div>
    <Propchildren age="21">abc</Propchildren>
    <Propchildren age="23">def</Propchildren>
    <Propchildren age="25">ghi</Propchildren>
    <Propchildren age="25" name="xyz"/>
      <Propchildren  name="xyz" age="25"/>

    </div>
  );
  }
}
export default Propparent
