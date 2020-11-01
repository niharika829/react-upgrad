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


import React ,{Component} from 'react';
class ApiMap extends Component{


constructor(){super();
  var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()+"T"+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+"Z";

            this.state={
              flag: false,
              students:[ ],
              date : date
            }
          }

render() {var date;
          return(<div>
            <div> {this.state.flag?
                    <div>
                      {
                        this.state.students.map((dynamic,i) =>
                        <div>
                         <div>{dynamic.title}</div>
                         <div>{dynamic.date_created}</div><br /><br />
                         </div>
                              )
                      }
                    </div>
                    :<h1>loading.........</h1>}
                    </div>
                    <div className='date'>
                        {this.state.date}
                    </div>
                    </div>
                  );
          }

  async componentDidMount(){

                  for(var i=0;i<3;i++)
                  {
                        const url = "https://images-api.nasa.gov/search?q=Sun";
                        const res=await fetch(url);
                        const data =await res.json();
                          //console.log(data);
                        this.state.students.push(data.collection.items[i].data[0]);

                    }
                    this.setState({flag:true});
                    console.log(this.state.students);
              }



                      }

export default ApiMap
