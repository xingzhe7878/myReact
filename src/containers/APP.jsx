import React, { Component, PropTypes } from 'react';

import Module from "../lib/module";
import AppNav from "../components/nav"

class App extends Module {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="J_app_main">
                <AppNav></AppNav>
                <div className="J_app_container">
                    {this.props.children}
                </div>
            </div>

        )
    }
}

export default App;