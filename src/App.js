import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./Accueil";
import QNS from "./QNS";
import NC from "./NC";
import Admin from "./Admin";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div classname="container mt-2" style={{ marginTop: 40 }}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/QNS">
                        <QNS />
                    </Route>
                    <Route path="/NC">
                        <NC />
                    </Route>
                    <Route path="/Admin">
                        <Admin />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;