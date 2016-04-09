import React from "react";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

export default class App extends React.Component {
	render() {
        return (
            <div>
                <NavBar />
                // Acá haz el resto Polo...
                <Footer />
            </div>
       );
	}
}
