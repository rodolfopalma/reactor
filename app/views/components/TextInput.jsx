import React from "react";

var TextInput = React.createClass({
    render(){
        return(
          <div class="form-group">
            <label htmlFor="usr">{this.props.name}:</label>
            <input type="text" className="form-control" id="usr" />
          </div>
      )
    }
});

module.exports = TextInput;
