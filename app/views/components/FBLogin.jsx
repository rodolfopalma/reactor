import React from "react";
import { History } from "react-router";

import FacebookLogin from "react-facebook-login";

var FBLogin = React.createClass({
    mixins: [ History ],
    handleFacebookResponse(response) {
        // TODO: handle rejection...
        if (typeof response.accessToken != "undefined") {
            window.PAC = {
                currentUserId: response.id,
                currentAccessToken: response.accessToken
            };
            this.history.pushState(null, "choose-people");
        }
    },
    render() {
        return (
            <div className="container">
                <p>
                    Help us find your friends by logging into Facebook.
                </p>
                <div id="facebookLoginContainer">
                    <FacebookLogin 
                        appId="988575744557213"
                        version="2.4"
                        callback={this.handleFacebookResponse}
                        scope="public_profile, user_friends"
                    />
                </div>
            </div>
       )
    }
});

module.exports = FBLogin;
