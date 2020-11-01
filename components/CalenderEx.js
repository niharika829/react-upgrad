import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Newcalender.css';
class CalenderEx extends Component {


  constructor() {
    super();
    this.main = this.main.bind(this);
    this.upcoming = this.upcoming.bind(this);
    this.passed = this.passed.bind(this);

    var today = new Date()
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var month = (today.getMonth() + 1);
    var day = today.getDate();

    this.state = {
      flag: false,
      students: [],
      date: date,
      passed: [],
      upcoming: [],
      day: day,
      month: month,
      bool: false,
      log: "passed",
      holiday: "No Holiday Today",
      hide: false
    }
  }

  render() {
    var date;
    var x = {
      display: 'none'
    }
    return (
      <div>

        <div> {this.state.flag ?

          <div>
            <div id='date'>

              <div id='current-date'>  {this.state.date}<br /><br /><br /><br /></div>
              <div id="main-announce-holiday">{this.state.holiday}</div>
            </div>

            <button id="btn" onClick={this.passed}>passed holidays</button>
            <button id="btn" onClick={this.upcoming}>upcoming holidays</button>

            <div id="main-container">
              <div id="desc-container">
                {this.state.log === "upcoming" ? < div className="row">
                  {
                    this.state.upcoming.map((upcome, i)=>
                    <div className="col-sm-3" style={{marginTop:"20px"}}>
                      <div className="card" style={{width: "18rem",height: "10rem",background:"black"}}>
                        <div className="card-body" style={{color:"white"}}>
                          <h5 className="card-title" onClick={e => this.main(upcome, i)}>{upcome.date.datetime.day}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{upcome.date.datetime.month}</h6>
                          <p className="card-text" style={{ display: "none" }} id={i}>{upcome.description}</p>
                          <p className="card-text">{upcome.name}</p>
                        </div>
                      </div>
                      </div>
                     )
                  }
                </div>
                  : this.state.log === "passed" ? <div className="row" >
                    {
                      this.state.passed.map((pass, i) =>

                      <div className="col-sm-3" style={{marginTop:"20px"}}>
                        <div className="card" style={{width: "18rem",height: "10rem",background:"black",overflow:"auto"}}>
                          <div className="card-body" style={{color:"white"}}>
                            <h5 className="card-title" onClick={e => this.main(pass, i)}>{pass.date.datetime.day}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{pass.date.datetime.month}</h6>
                            <p className="card-text" style={{ display: "none" }} id={i}>{pass.description}</p>
                            <p className="card-text">{pass.name}</p>
                          </div>
                        </div>
                        </div>
                      )
                    }
                  </div>
                    : null
                }
              </div>
            </div>

          </div>

          : <h1>loading.........</h1>}
        </div>

      </div>
    );
  }

  async componentDidMount() {

    //  document.getElementById('main-announce-holiday');
    const url = "https://calendarific.com/api/v2/holidays?country=IN&year=2019&api_key=0fdf5daf5f815c7bc9fd8b56b1571f5f8cd5a160";
    const res = await fetch(url);
    const data = await res.json();
    for (var i = 0; i < 70; i++) {

      //  console.dir(data);
      var rd = data.response.holidays[i].date.datetime.day;
      var rm = data.response.holidays[i].date.datetime.month;
      //  console.log(rd);
      //  console.log(rd);
      var d = this.state.day;
      var m = this.state.month;
      // console.log(d);
      // this.state.students.push(data.response.holidays[i]);
      if ((d <= rd) && (m <= rm)) {
        this.state.upcoming.push(data.response.holidays[i]);
        if ((d === rd) && (m === rm)) {
          //if(1===1){
          this.state = {
            holiday: 'It is a holiday',

          }
          this.setState({ holiday: this.state.holiday })

          // document.getElementById('main-announce-holiday').innerHTML='Today is a holiday';
        }
      }
      else {
        this.state.passed.push(data.response.holidays[i]);
      }

    } this.setState({ flag: true });
    //  console.log(this.state.students);


    console.log(this.state.upcoming);
    console.log(this.state.passed);
  }


  upcoming() {
    this.setState({ log: "upcoming" })




  }

  passed() {

    this.setState({ log: "passed" })


  }
  main(data, i) {
    console.log("data", data, i)
    if (document.getElementById(i) != null) {
      if (document.getElementById(i).style.display != "") {
        if (document.getElementById(i).style.display != "block") {

          document.getElementById(i).style.display = "block"

        } else {
          document.getElementById(i).style.display = "none"
        }
      }
    }
  }

}

export default CalenderEx
