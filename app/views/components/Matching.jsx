import React from "react";
import { History } from "react-router";
import axios from "axios";

import TextInput from "./TextInput.jsx";

var Matching = React.createClass({
	mixins: [ History ],
	handleSubmit(ev) {
		var that = this;
        var inputs = this.refs.form.querySelectorAll("input[type='number']");
		var requestObject = {
			passengers: {},
			drivers: {},
		}
		var currentInput;
		var ratingObject;
		for (var i = 0; i < inputs.length; i++) {
			currentInput = inputs[i];
			ratingObject = {
				username: currentInput.dataset.childName,
				rating: currentInput.value
			};
			if (currentInput.dataset.parentName in requestObject[currentInput.dataset.parentType]) {
				requestObject[currentInput.dataset.parentType][currentInput.dataset.parentName].push(ratingObject);
			} else {
				requestObject[currentInput.dataset.parentType][currentInput.dataset.parentName] = [ ratingObject ];
			}
		}
		axios.get("/solve", {
			params: {
				data: JSON.stringify(requestObject)
			}
		}).then(function(response) {
			window.PAC.serverResponse = response.data;
			that.history.pushState(null, "results");
		});
		ev.preventDefault();
	},
	render() {
		var drivers = window.PAC.roles.drivers;
		var passengers = window.PAC.roles.passengers;

		var driversFormGroups = [];
		for (var i = 0; i < drivers.length; i++) {
			var subFormGroups = [];
			for (var j = 0; j < passengers.length; j++) {
				subFormGroups.push(
					<div className="form-group">
						<label> { passengers[j].name } </label>
						<input required type="number" data-parent-type="drivers" data-parent-name={ drivers[i].name } data-child-name={ passengers[j].name } />
					</div>
				);
			}
			driversFormGroups.push(
				<div className="driverFormGroup">
					<h3> { drivers[i].name } </h3>
					{ subFormGroups }
				</div>
			);
		}
		var passengersFormGroups = [];
		for (var i = 0; i < passengers.length; i++) {
			subFormGroups = [];
			for (var j = 0; j < drivers.length; j++) {
				subFormGroups.push(
					<div className="form-group">
						<label> { drivers[j].name } </label>
						<input required type="number" data-parent-type="passengers" data-parent-name={ passengers[i].name } data-child-name={ drivers[j].name } />
					</div>
				);
			}
			passengersFormGroups.push(
				<div className="passengerFormGroup">
					<h3> { passengers[i].name } </h3>
					{ subFormGroups }
				</div>
			);
		}
		return (
			<div className="container" id="matchingContainer">
				<form ref="form" onSubmit={ this.handleSubmit }>
					<h2> Drivers' preferences </h2>
					{ driversFormGroups}
					<h2> Passengers' preferences </h2>
					{ passengersFormGroups}
					<input type="submit" className="btn btn-default btn-lg" value="Submit" />
				</form>

			</div>
		);
	}
});

module.exports = Matching;
