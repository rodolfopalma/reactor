import React from "react";
import { Route, IndexRoute  } from "react-router";

import Main from "./components/Main.jsx"
import Home from "./components/Home.jsx";
import Begin from "./components/Begin.jsx";
import Matching from "./components/Matching.jsx";

module.exports = (
    <Route path="/" component={Main}>
        <Route path="begin" component={Begin} />
        <Route path="matching" component={Matching} />
        <IndexRoute component={Home} />
    </Route>
)
