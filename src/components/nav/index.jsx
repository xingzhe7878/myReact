import React, { Component, PropTypes } from 'react';

import Module from "../../lib/module";

class AppNav extends Module {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    jump(url) {
        location.replace(url);
    }

    render() {
        return (
            <div className="J_app_left_nav">
                <ul className="left_menu">
                    <li onClick={()=>this.jump("#/")}>
                        page-a
                    </li>
                    <li onClick={()=>this.jump("#/PageB")}>
                        page-b
                    </li>
                </ul>
            </div>
        )
    }
}

export default AppNav;