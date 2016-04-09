import React from "react";
import { History } from "react-router";

var App = React.createClass({
    mixins: [ History ],
    handleBegin() {
        this.history.pushState(null, "begin")
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ante et massa consequat convallis. Nulla ac quam porttitor, vehicula mi at, tempor eros. Vestibulum euismod nisl et blandit semper. Nulla quis nulla risus. Maecenas fringilla suscipit ullamcorper. Ut ac varius tellus, venenatis dictum ante. Duis id lacinia tortor, maximus tristique sapien. Duis tortor velit, ornare vel blandit ac, condimentum ut urna. Cras malesuada quis purus non sollicitudin. Morbi mollis aliquet mauris, et elementum purus rhoncus in. Integer fermentum orci diam, at malesuada ligula facilisis non. Proin molestie, erat non eleifend molestie, justo ipsum vulputate lacus, vel lobortis ligula nunc quis magna. Mauris non dolor vel elit fermentum fringilla. Etiam dictum tristique fermentum. Maecenas et scelerisque eros, sed malesuada turpis. Nunc vehicula pretium auctor.
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12" id="landingButton">
                        <button onClick={this.handleBegin} type="button" className="btn btn-primary btn-lg">Begin</button>
                    </div>
                </div>

            </div>
       );
	}
});

module.exports = App;
