import React from 'react';

var Results = React.createClass({
    getInitialState() {
        return {
            serverResponse: window.PAC.serverResponse
        }
    },
    render() {
        console.log(typeof this.state.serverResponse);
        var results = [];
        for (var key in this.state.serverResponse) {
            if (this.state.serverResponse.hasOwnProperty(key)) {
                var passengers = [];
                for (var i = 0; i < this.state.serverResponse[key].length; i++) {
                    passengers.push(
                        <li>
                            { this.state.serverResponse[key][i] }
                        </li>
                    )
                }
                results.push(
                    <div>
                        <h1> { key } </h1>
                        <ul>
                            { passengers }
                        </ul>
                    </div>
                )
            }
        }
        return (
            <div className="container">
                { results }
            </div>
       )
    }
});

module.exports = Results;
/*
 * this.state.serverResponse = {
 *  "driver_1": ["passenger_1", "passegner_2", ...],
 *  "driver_2": ["passenger_3", "passenger_4", ...],
 *  ...
 * }
 */
