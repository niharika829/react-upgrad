//f4f52b23e088c0c2eff6a5d8d144cdd379449277
//https://calendarific.com/api/v2/holidays?country=IN&year=2018&api_key=XXXXXXX'
import React ,{Component} from 'react';
class Calender extends Component{


constructor(){super();
  this.passed = this.passed.bind(this);
  this.upcoming = this.upcoming.bind(this);
  var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

            this.state={
              flag: false,
              students:[ ],
              date : date,
              passed:[ ],
              upcoming:[ ]
            }
          }

render() {
          var date;
          var x={
            display:'none'
          }
          return(
            <div>
                            <div> {this.state.flag?

                                      <div>
                                                <div className='date'>
                                                      {this.state.date}
                                                </div>
                                                <div>

                                                        <div>
                                                        <div>
                                                        {this.decide}
                                                        <button onClick={this.passed}>passed holidays</button>
                                                          <button onClick={this.upcoming}>upcoming holidays</button>
                                                        </div>
                                                        <div id="1" style={ x } onClick={this.display}>{this.state.students[0].name}</div>
                                                        <div id="main" style={ x }>
                                                        {

                                                                              <div>
                                                                                <div>{this.state.students[0].type}</div><br /><br />
                                                                                </div>


                                                        }
                                                        </div>
                                                        <div id="2"  style={ x } onClick={this.display1}>{this.state.students[1].name}</div>
                                                        <div id="main1" style={ x }>
                                                        {

                                                                              <div>
                                                                                <div>{this.state.students[1].type}</div><br /><br />
                                                                                </div>


                                                        }
                                                        </div>
                                                        <div id="3" style={ x } onClick={this.display2}>{this.state.students[2].name}</div>
                                                        <div id="main2" style={ x }>
                                                        {

                                                                              <div>
                                                                                <div>{this.state.students[2].type}</div><br /><br />
                                                                                </div>


                                                        }
                                                        </div>
                                                        </div>

                                                  </div>
                                        </div>
                                    :<h1>loading.........</h1>}
                            </div>

              </div>
              );
          }

  async componentDidMount(){

                   for(var i=0;i<3;i++)
                   {
                        const url = "https://calendarific.com/api/v2/holidays?country=IN&year=2019&api_key=f4f52b23e088c0c2eff6a5d8d144cdd379449277";
                        const res=await fetch(url);
                        const data =await res.json();
                          //console.dir(data);
                         this.state.students.push(data.response.holidays[i]);

                    }
                     this.setState({flag:true});
                     console.log(this.state.students);
              }



              decide(){
                var today = new Date(),
                    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                    for(var j=0;j<3;j++){
                      var r=<div>
                      {this.state.students[j].date[1].datetime[2]}
                      </div>
                      if(today.getDate() < r  )
                       this.state.upcoming.push(this.state.students[j]);
                    }console.log(this.state.upcoming)
              }


              display(){
document.getElementById('main').style.display='block';
              }
              display1(){
            document.getElementById('main1').style.display='block';
              }
              display2(){
            document.getElementById('main2').style.display='block';
              }
              passed(){
            document.getElementById('1').style.display='block';
            document.getElementById('3').style.display='block';
              }
              upcoming(){
            document.getElementById('2').style.display='block';
              }


                      }

export default Calender
