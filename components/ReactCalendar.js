import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-modal';
import './ReactCalendar.css';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',

  }
};
Modal.defaultStyles.overlay.backgroundColor = '#212529';


class ReactCalendar extends Component {


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
      hide: false,
      modalIsOpen: false,

      details:""
    }
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  render() {
    var date;
    var x = {
      display: 'none'
    }
    return (
      <div>



      <div id="main">

<Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={e=>this.afterOpenModal.bind(this)}

          contentLabel="Example Modal"
        >

         <p> <h4 style={{textAlign:"center",fontSize:"34px"}}>{this.state.details!=""?this.state.details.date.iso:<h1>"No Date Available"</h1>}</h4>
         </p><br />
         <p> <h3 style={{textAlign:"center",}}>{this.state.details!=""?this.state.details.name:<h1>"No Name Available"</h1>}</h3>
         </p><br />
        <p> <button style={{position:"relative",left:"5%",}} className="button button3">{this.state.details!=""?this.state.details.type[0]:<h1>"No Specific Details"</h1>}</button></p><br /><br />
        <p> <h6 style={{textAlign:"center",}}>{this.state.details!=""?this.state.details.description:<h1>"No Description For This Holiday"</h1>}</h6>
         </p>
            <button className="button button1"onClick={e=>this.closeModal()} style={{position:"relative",left:"8%",}}>close</button>


        </Modal>
        <div>

         {this.state.flag ?

          <div>
            <div id='date'>
              <button id='current-date' type="button" class="btn btn-primary">{this.state.date}</button><br /><br /><br /><br />

              <div><h3>{this.state.holiday}</h3></div><br /><br />
            </div>

            <button id="btn" onClick={this.passed}>passed holidays</button>
            <button id="btn" onClick={this.upcoming}>upcoming holidays</button>

            <div id="main-container">
              <div id="desc-container">
                {this.state.log === "upcoming" ? < div className="row">
                  {
                    this.state.upcoming.map((upcome, i)=>
                    <div className="col-sm-3" style={{marginTop:"20px"}}  onClick={e => this.main(upcome, i)}>
                      <div id="card" className="card" >
                        <div className="card-body" style={{color:"black"}}>
                          <h1 className="card-title"><b>{upcome.date.datetime.day}</b></h1>
                          <h6 className="card-subtitle mb-2 text-muted">{upcome.date.datetime.month}</h6>
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

                      <div className="col-sm-3" style={{marginTop:"20px"}}  onClick={e => this.main(pass, i)}>
                        <div id="card" className="card">
                          <div className="card-body" style={{color:"black"}}>
                            <h1 className="card-title">{pass.date.datetime.day}</h1>
                            <h6 className="card-subtitle mb-2 text-muted">{pass.date.datetime.month}</h6>
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

          : <h1 style={{paddingTop:"15%",paddingLeft:"40%"}}>loading.........</h1>}
        </div>

      </div>

      </div>

    );
  }

  async componentDidMount() {
     //
     //
    Modal.setAppElement('#main');
    //  document.getElementById('main-announce-holiday');

  //
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
            holiday: 'Hey,you got Holiday today',

          }
          this.setState({ holiday: this.state.holiday })

          // document.getElementById('main-announce-holiday').innerHTML='Today is a holiday';
        }
      }
      else {
        this.state.passed.push(data.response.holidays[i]);
      }

    }
    //  console.log(this.state.students);


this.setState({ flag: true });
    console.log(this.state.upcoming);
    console.log(this.state.passed);

  }


  upcoming() {
    this.setState({ log: "upcoming" })
  }

  closeModal() {
  //  console.log("hhhh")
    this.setState({modalIsOpen: false});
  }

  passed() {

    this.setState({ log: "passed" })


  }
  main(data, i) {
    console.log("data", data, i)
    this.setState({details:data,modalIsOpen: true,});
    // if (document.getElementById(i) != null) {
    //   if (document.getElementById(i).style.display != "") {
    //     if (document.getElementById(i).style.display != "block") {

    //       document.getElementById(i).style.display = "block"

    //     } else {
    //       document.getElementById(i).style.display = "none"
    //     }
    //   }
    // }
  }

}

export default ReactCalendar
