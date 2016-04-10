import React from "react";
import { History } from "react-router";

var App = React.createClass({
    mixins: [ History ],
    handleLogin() {
        this.history.pushState(null, "facebook-login")
    },

	render() {
        return (
            <div className="container">

              <div className="row">
                <div className="col-md-6">
                  <img src={'http://i.imgur.com/hAXh1t7.jpg?1'} style={{
					            	width: 450,
					            	height: 300,
					            	backgroundColor: 'transparent',
					            	marginRight: 10,
          				}} />

                </div>
                    <div className="col-md-6">
                  Imagine you are having a trip with a group of friends in more than one car. A couple of people are driving and everyone has to choose the car that they are travelling.<br />
                  Like every group of people there are some that get along better and would like to travel together. <br />
                  This page takes in consideration the preferences of everyone and matches passengers with drivers in the best possible way, allowing you to have a pleasurable trip.
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12" id="landingButton">
                        <button onClick={this.handleLogin} type="button" className="btn btn-primary btn-lg">Login with FB</button>
                    </div>
                </div>

            </div>
       );
	}
});

module.exports = App;
