import React from "react";

var PassengersFormGroup = React.createClass({
    render() {
        return (
            <div className="form-group">
                <label htmlFor="passengerInput{ this.props.n }">Passenger #{ this.props.n + 1 }</label>
                <input type="text" className="form-control" id="passengerInput{ this.props.n }" placeholder="John Doe" />
            </div>
       )
    }
})

module.exports = PassengersFormGroup;
