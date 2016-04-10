import React from "react";
import { Route, IndexRoute  } from "react-router";

import Main from "./components/Main.jsx"
import Home from "./components/Home.jsx"
import Begin from "./components/Begin.jsx"
import Matching from "./components/Matching.jsx"
import Results from "./components/Results.jsx";
import Results2 from "./components/Results2.jsx"
import FBLogin from "./components/FBLogin.jsx";

module.exports = (
    <Route path="/" component={Main}>
        <Route path="facebook-login" component={FBLogin} />
        <Route path="choose-people" component={Begin} />
        <Route path="matching" component={Matching} />
        <Route path="results" component={Results} />
        <Route path="test" component={Results2} />
        <IndexRoute component={Home} />
    </Route>
)
