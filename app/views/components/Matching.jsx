import React from "react";
import ReactDOM from "react-dom";
import TextInput from "./TextInput.jsx";


var Matching  = React.createClass({


  render(){
    console.log("renering matching", window.PAC);
    var rows = []
    var rows2 = []
    var dictPassengers = {}
    var dictDrivers = {}
    var drivers = window.PAC.roles.drivers
    var passengers = window.PAC.roles.passengers
    var currentUserId = window.PAC.currentUserId
    var currentDriver;

    rows.push(<h1>Select a car</h1>)
    for(var i = 0; i < passengers.length; i++) {
      var listaTemporal = []
      var passenger = passengers[i];
      rows.push(<h3> {passenger.name} </h3>)

      for(var j = 0; j < drivers.length; j++) {
        listaTemporal.push(currentDriver.name)
        var currentDriver = drivers[j];
        rows.push(<TextInput key={"driver"+i+"passenger"+j} name={currentDriver.name} />)

      dictPassengers[passenger] = listaTemporal
      }
    }

    rows2.push(<h1>Select your passengers</h1>)

    for(var j = 0; j < drivers.length; j++) {
      var currentDriver = drivers[j];
      rows2.push(<h3> {currentDriver.name} </h3>)

      for(var i = 0; i < passengers.length; i++) {
        var passenger = passengers[i];
        rows2.push(<TextInput key={"driver"+j+"passenger"+i} name={passenger.name} />)

      }
    }


    return (
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  { rows }
                  { rows2 }

                </div>
              </div>
            </div>

        );
  }

});
module.exports = Matching;
