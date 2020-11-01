//f4f52b23e088c0c2eff6a5d8d144cdd379449277
//https://calendarific.com/api/v2/holidays?country=IN&year=2018&api_key=XXXXXXX'
import React ,{Component} from 'react';
class Ex extends Component{


constructor(){
        super();
         this.main=this.main.bind(this);
        this.upcoming=this.upcoming.bind(this);
       this.passed=this.passed.bind(this);

        var today = new Date()
        var  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var    month = (today.getMonth() + 1);
        var  day =  today.getDate();

            this.state={
              flag: false,
              students:[ ],
              date : date,
              passed:[ ],
              upcoming:[ ],
              day : day,
              month: month,
              bool:false,
              log:false,
              holiday:"No Holiday Today",
              hide:false
            }
          }

render() {
          var date;
          var x={
            display:'none'
          }
          var y={
            width:'1000px',
            height:'1000px',
            padding:'100px',
            position:'relative',
            left:'10px'
          }
          var z={
            display:"inline",
            width:'500px',
            // height:'500px',
            padding:'10px',
          //   position:'relative',
          //   left:'10px'
          margin:'10px'
           }
          return(
            <div style={ y }>

                            <div> {this.state.flag?

                                          <div>
                                                      <div className='date'>
                                                            {this.state.date}
                                                            <div id="main-announce-holiday">{this.state.holiday}</div>
                                                      </div>

                                                      <button style={ z } onClick={this.passed}>passed holidays</button>
                                                        <button style={ z } onClick={this.upcoming}>upcoming holidays</button>


                                                          <div id="main-upcoming" style={{display: this.state.log ? 'block' : 'none' }}>
                                                            {
                                                              this.state.upcoming.map((upcome,i) =>
                                                                    <div onClick={this.main}>
                                                                   <h1><div>{upcome.date.datetime.day}</div></h1>
                                                                    <div>{upcome.date.datetime.month}</div>
                                                                        <div style={{display: this.state.hide ? 'block' : 'none' }}>{upcome.description}</div>
                                                                       <div>{upcome.name}</div><br /><br />
                                                                        </div>
                                                                      )
                                                                  }
                                                              </div>




                                                      <div id="main-passed" style={{display: this.state.bool ? 'block' : 'none' }}>
                                                        {
                                                          this.state.passed.map((pass,i) =>
                                                          <div>
                                                           <h1><div>{pass.date.datetime.day}</div></h1>
                                                              <div>{pass.date.datetime.month}</div>
                                                           <div>{pass.name}</div><br /><br />
                                                           </div>
                                                                )
                                                        }
                                                      </div>




                                            </div>
                                    :<h1>loading.........</h1>}
                            </div>

              </div>
              );
          }

  async componentDidMount(){

    //  document.getElementById('main-announce-holiday');
    const url = "https://calendarific.com/api/v2/holidays?country=IN&year=2019&api_key=0fdf5daf5f815c7bc9fd8b56b1571f5f8cd5a160";
    const res=await fetch(url);
    const data =await res.json();
                   for(var i=0;i<70;i++)
                   {

                      //  console.dir(data);
                            var rd=data.response.holidays[i].date.datetime.day;
                            var rm=data.response.holidays[i].date.datetime.month;
                       //  console.log(rd);
                        //  console.log(rd);
                            var d=this.state.day;
                             var m=this.state.month;
                          // console.log(d);
                        // this.state.students.push(data.response.holidays[i]);
                           if((d<=rd)&&(m<=rm)){
                              this.state.upcoming.push(data.response.holidays[i]);
                             if((d===rd)&&(m===rm)){
                              //if(1===1){
                                this.state={
                                  holiday:'It is a holiday',

                                }
                                this.setState({holiday: this.state.holiday})

                                  // document.getElementById('main-announce-holiday').innerHTML='Today is a holiday';
                             }
                           }
                             else{    this.state.passed.push(data.response.holidays[i]);
                              }

                          } this.setState({flag:true});
                                            //  console.log(this.state.students);


                     console.log(this.state.upcoming);
                     console.log(this.state.passed);  }


              upcoming(){
                this.state={

                  log:'true',
                }
                        this.setState({log: this.state.log})




              }

              passed(){
                this.state={
                  bool:'true',

                }
                this.setState({bool: this.state.bool})


              }
              main(){

                this.state={
                  hide:'true',

                }
                this.setState({hide: this.state.hide})

              }      }

export default Ex
