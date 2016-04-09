import React from "react";

import DriverFormGroup from "./DriverFormGroup.jsx";
import PassengersFormGroup from "./PassengersFormGroup.jsx";

var Begin = React.createClass({
    getInitialState() {
        return {
            nOfDrivers: 3,
            nOfPassengers: 1,
        }
    },
    handleAddDriverFormGroup() {
        this.state.nOfDrivers += 1
    },
    render() {
        var driversFormGroups = [];
        for (var i = 0; i < this.state.nOfDrivers; i++) {
            driversFormGroups.push(<DriverFormGroup n={i} />);
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h2>Tell us who are driving...</h2>
                    {driversFormGroups}
                    <button className="btn btn-default" onClick={this.handleAddDriverFormGroup}>Add driver</button>
                    <h2>Tell us who are the passengers...</h2>
                    <PassengersFormGroup />
                </form>
            </div>
       )
    }
});

module.exports = Begin;
