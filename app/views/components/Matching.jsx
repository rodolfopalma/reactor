import React from "react";
import ReactDOM from "react-dom";
import {Table, Column, Cell} from "fixed-data-table";



var Matching  = React.createClass({
  render(){
    var rows = []
    var drivers = Window.PAC.roles.drivers
    var passengers = Window.PAC.roles.passengers
    var currentUserId = Window.PAC.currentUserId

    for(var i = 0; i < drivers.length; i++) {
      currentDriver = this.state.drivers[i];
      if currentUserId !== currentDriver.id {
      rows.push(<TextInput key={i} name={currentDriver.name} />)
      }
    }

    for(var i = 0; i < passengers.length; i++) {
      currentDriver = this.state.passengers[i];
      if currentUserId !== currentDriver.id {
      rows.push(<TextInput key={i} name={currentDriver.name} />)
      }
    }


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
