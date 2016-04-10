import React from "react";
import { History } from "react-router";
// import FB from "fb";

import _ from "lodash";

import FriendRow from "./FriendRow.jsx";
import DriverFormGroup from "./DriverFormGroup.jsx";
import PassengersFormGroup from "./PassengersFormGroup.jsx";

var Begin = React.createClass({
    mixins: [ History ],
    getInitialState() {
        return {
            friendsArray: []
        }
    },
    componentDidMount() {
        var that = this;
        FB.api(
            '/' + window.PAC.currentUserId + '/friends',
            'GET',
            {},
            function(response) {
                that.setState({
                    friendsArray: response.data
                });
            }
        );
    },
    handleSubmit(ev) {
        var inputs = this.refs.form.getElementsByTagName("input");
        var currentCheckbox;
        window.PAC.roles = {
            "drivers": [],
            "passengers": []
        };
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                var friendObject = _.filter(
                    this.state.friendsArray,
                    function(friend) {
                        return friend.id == inputs[i].value;
                    }
                );
                window.PAC.roles[inputs[i].name].push({
                    id: inputs[i].value,
                    name: friendObject[0].name
                });
            }
        }
        console.log(window.PAC);
        ev.preventDefault();
        this.history.pushState(null, "matching");
    },
    render() {
        var driversRows = [];
        var passengersRows = [];
        var currentFriend;
        for(var i = 0; i < this.state.friendsArray.length; i++) {
            currentFriend = this.state.friendsArray[i];
            driversRows.push(<FriendRow key={i} id={currentFriend.id} fieldType="drivers" name={currentFriend.name} />)
            passengersRows.push(<FriendRow key={i} id={currentFriend.id} fieldType="passengers" name={currentFriend.name} />)
        }
        return (
            <div className="container">
                <form ref="form" onSubmit={ this.handleSubmit }>
                    <h2>Tell us who are driving...</h2>
                    { driversRows }
                    <h2>Tell us who are the passengers...</h2>
                    { passengersRows }
                    <div className="form-group">
                        <input id="beginSubmitButton" className="btn btn-primary btn-default" type="submit" value="Next" />
                    </div>
                </form>
            </div>
       )
    }
});

module.exports = Begin;
