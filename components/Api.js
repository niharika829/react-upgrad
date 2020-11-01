import React ,{Component} from 'react';
class Api extends Component{
  state={
    flag: false,
    students:null
  }
  constructor(){
    super();
  }
  render(){
    return(
      <div>
      {
        this.state.flag?<h1>{this.state.students.first}&nbsp;{this.state.students.last}</h1>:<h1>loading.........</h1>
        }
        </div>
    );
  }

  async componentDidMount(){
    const url = "https://randomuser.me/api/";
    const res=await fetch(url);
    const data =await res.json();
    console.log(data);
    this.setState({students: data.results[0].name,flag:true});
  }
}
export default Api
