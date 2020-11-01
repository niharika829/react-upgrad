import React ,{Component} from 'react';
class State extends Component{
  state = {
	timingList: [
        {
            id: 1,
            time: '9 AM',
            isMeetingSet: false
        },
        {
            id: 2,
            time: '10 AM',
            isMeetingSet: false
        },
        {
            id: 3,
            time: '11 AM',
            isMeetingSet: false
        }
	]
};


  //   render() {
  //     return (
  //         <div className="main-container">
  //             <div className="timing-list-container">
  //                 {
  //                     this.state.timingList.map(timing => {
  //                         return <div>
  //                             <span>{timing.time}</span>
  //                         </div>
  //                     })
  //                 }
  //             </div>
  //         </div>
  //     );
  // }
  //this will work but it will give a warning
  render() {
      return (
          <div className="main-container">
              <div className="timing-list-container">
                  {
                      this.state.timingList.map(timing => {
                          return <div key={timing.id}>
                              <span>{timing.time}</span>
                          </div>
                      })
                  }
              </div>
          </div>
      );
  }

 }
export default State
