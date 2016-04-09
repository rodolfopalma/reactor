import React from "react";

var DriverFormGroup = React.createClass({
    render() {
        return (
            <div className="form-group">
                <label htmlFor="driverInput{ this.props.n }">Driver #{ this.props.n + 1 }</label>
                <input type="text" className="form-control" id="driverInput{ this.props.n }" placeholder="John Doe" />
            </div>
       )
    }
})

module.exports = DriverFormGroup;
