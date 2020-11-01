/*import React ,{Component} from 'react';
class Api extends Component{
  state={
    flag: false,
    students:[ ]
  }
  constructor(){
    super();
  }
  render(){
    return(
      <div>
      {
        //this.state.flag?<h1>{this.state.students.first}&nbsp;{this.state.students.last}</h1>:<h1>loading.........</h1>
        this.state.flag?<h1>hey</h1>:<h1>loading.........</h1>
        }
        </div>
    );
  }

  async componentDidMount(){

    const url = "https://dog.ceo/api/breeds/image/random";
    const res=await fetch(url);
    const data =await res.json();
    //this.state.students.push(data);
    console.log(data);
    //this.setState({students: data.results[0].name,flag:true});
    // this.state.students.map(students => {
    //    return <div><h1>{this.state.students.first}</h1></div>},

}
}
export default Api*/

import React, { Component } from 'react';
class ApiMap extends Component {
	constructor() {
		super();

		this.state = { flag: false, students: [] };
		this.display = this.display.bind(this);
	}

	render() {
		return <div>{this.state.flag ? <div>{this.display}</div> : <h1>loading.........</h1>}</div>;
	}

	async componentDidMount() {
		for (var i = 0; i < 3; i++) {
			const url = 'https://images-api.nasa.gov/search?q=Sun';
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			this.state.students.push(data.collection.items[i].data[0]);
		}
		this.setState({ flag: true });
		console.log(this.state.students);
	}

	display() {
		return this.state.students.map((dynamic, i) => {
			<div>
				<div>{dynamic.title}</div>
				<div>{dynamic.center}</div>
				<br />
				<br />
			</div>;
		});
	}
}
export default ApiMap;
