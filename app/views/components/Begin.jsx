import React from "react";
import { History } from "react-router";

import DriverFormGroup from "./DriverFormGroup.jsx";
import PassengersFormGroup from "./PassengersFormGroup.jsx";

var Begin = React.createClass({
    mixins: [ History ],
    getInitialState() {
        return {
            nOfDrivers: 1,
            nOfPassengers: 1,
        }
    },
    handleAddDriverFormGroup() {
        this.setState({
            nOfDrivers: this.state.nOfDrivers + 1,
            nOfPassengers: this.state.nOfPassengers
        });
    },
    handleAddPassengerFormGroup() {
        this.setState({
            nOfDrivers: this.state.nOfDrivers,
            nOfPassengers: this.state.nOfPassengers + 1
        });
    },
    handleSubmit() {
        this.history.pushState(null, "matching");
    },
    render() {
        var driversFormGroups = [];
        var passengersFormGroups = [];
        for (var i = 0; i < this.state.nOfDrivers; i++) {
            driversFormGroups.push(<DriverFormGroup n={i} />);
        }
        for (var i = 0; i < this.state.nOfPassengers; i++) {
            passengersFormGroups.push(<PassengersFormGroup n={i} />);
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h2>Tell us who are driving...</h2>
                    {driversFormGroups}
                    <button className="btn btn-default" onClick={this.handleAddDriverFormGroup}>Add driver</button>
                    <h2>Tell us who are the passengers...</h2>
                    {passengersFormGroups}
                    <button className="btn btn-default" onClick={this.handleAddPassengerFormGroup}>Add passenger</button>
                    <div className="form-group">
                        <input id="beginSubmitButton" className="btn btn-primary btn-default" type="submit" value="Next" />
                    </div>
                </form>
            </div>
       )
    }
});

module.exports = Begin;
