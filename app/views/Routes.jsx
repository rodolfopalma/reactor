import React from "react";
import { Route, IndexRoute  } from "react-router";

import Main from "./components/Main.jsx"
import Home from "./components/Home.jsx";

module.exports = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
    </Route>
)

