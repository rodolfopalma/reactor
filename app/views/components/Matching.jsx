import React from "react";
import ReactDOM from "react-dom";
import TextInput from "./TextInput.jsx";


var Matching  = React.createClass({
  render(){
    var rows = []
    var drivers = window.PAC.roles.drivers
    var passengers = window.PAC.roles.passengers
    var currentUserId = window.PAC.currentUserId
    var currentDriver;

    for(var i = 0; i < drivers.length; i++) {
      currentDriver = drivers[i];
      if (currentUserId !== currentDriver.id) {
      rows.push(<TextInput key={i} name={currentDriver.name} />)
      }
    }

    for(var i = 0; i < passengers.length; i++) {
      currentDriver = passengers[i];
      if (currentUserId !== currentDriver.id) {
      rows.push(<TextInput key={i} name={currentDriver.name} />)
      }
    }


    return (
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  { rows }
                </div>
              </div>
            </div>
        );
  }

});
module.exports = Matching;
