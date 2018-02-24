import React from "react";
import ReactDom from "react-dom";
import { HashRouter, BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';
import "./src/resources/css/app.less";

import App from "./src/containers/App";
import Home from "./src/containers/home"
import CreateActivity from "./src/containers/createActivity";
import ActivityLists from "./src/containers/activityLists";
import SearchBaby from "./src/containers/searchBaby";
import SearchSend from "./src/containers/searchSend";



const dom = document.getElementById("J_app-pages");
const Root = () => (
    <HashRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/CreateActivity" component={CreateActivity}/>
                <Route path="/ActivityLists" component={ActivityLists}/>
                <Route path="/SearchBaby" component={SearchBaby}/>
                <Route path="/SearchSend" component={SearchSend}/>
                <Redirect to="/"/>
            </Switch>
        </App>
    </HashRouter>
);

ReactDom.render(<Root/>, dom);
