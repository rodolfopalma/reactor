import React from "react";

var FriendRow = React.createClass({
    render() {
        return (
            <div className="form-group">
                <div className="checkbox">
                    <input type="checkbox" name={ this.props.fieldType } value={ this.props.id } /> { this.props.name }
                </div>
            </div>
       )
    }
});

module.exports = FriendRow;
