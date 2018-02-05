import React from "react";
import ReactDom from "react-dom";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';
import "./src/resources/css/app.less";

import App from "./src/containers/App";
import PageA from "./src/containers/page-a";
import PageB from "./src/containers/page-b";


ReactDom.render(
    (   <HashRouter>
            <App>
                <Route exact path="/" component={PageA}  />
                <Route path="/PageB" component={PageB}  />
            </App>
        </HashRouter>
    ),
    document.getElementById("J_app-pages")
);
