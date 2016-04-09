import React from "react";

var PassengersFormGroup = React.createClass({
    render() {
        return (
            <div className="form-group">
                <label for="passengerInput">Passenger #1</label>
                <input type="text" className="form-control" id="passengerInput" placeholder="John Doe" />
            </div>
       )
    }
})

module.exports = PassengersFormGroup;
