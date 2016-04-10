import React from "react";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
<<<<<<< 70db136f859f11d8ef2d99479556330c303f27f1
=======

>>>>>>> Table

export default class App extends React.Component {
	render() {
        return (
            <div>
                <NavBar />
                { this.props.children }
                <Footer />
            </div>
       );
	}
}
