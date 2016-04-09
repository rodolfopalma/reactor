import React from "react";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import FacebookButton from './FacebookButton';

export default class App extends React.Component {
	render() {
        return (
            <div>
                <NavBar />
                { this.props.children }
                <Footer />
				<FacebookButton fb={FB} />
            </div>
       );
	}
}
