import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
          <nav className="navbar navbar-default" id="foot">
              <div className="container">
                  <h4>Made with love by Reactors team at the 2016 Facebook Chile Regional Hackathon</h4>
                  <h5>Licensed under the Beerware license (buy us a beer!)</h5>
              </div>
          </nav>
       )
    }
}
