import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/home';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route component={() => <div>404</div>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;