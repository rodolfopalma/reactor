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
                <div id="landingImageDiv" className="col-md-6">
                  <img src={'http://i.imgur.com/hAXh1t7.jpg?1'} style={{
					            	width: 450,
					            	height: 300,
					            	backgroundColor: 'transparent',
					            	marginRight: 10,
          				}} />

                </div>
                    <div id="landingParagraphDiv" className="col-md-6">
					<p className="lead">
                  Imagine you are <mark>having a trip</mark> with a group of friends in <mark>more than one car</mark>. <br /> A couple of people are driving and <mark>everyone has to choose</mark> the car that they are travelling.<br />
                  Like every group of people, there are some that <s>don't</s> get along together and would<s>n't</s> like to travel in the same car. <br />
                  This web app <mark>takes in consideration the preferences</mark> of everyone and matches passengers with drivers in the best possible way, allowing you to have a <mark>pleasurable trip</mark>.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12" id="landingButton">
                        <button onClick={this.handleLogin} type="button" className="btn btn-primary btn-lg">Login with FB</button>
						<br />
						<br />
						<small>Because it wouldn't be a Facebook Hackathon if we didn't use the Facebook API, right?</small>
                    </div>
                </div>

            </div>
       );
	}
});

module.exports = App;
