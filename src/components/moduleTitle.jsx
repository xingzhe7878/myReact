import React, { Component, PropTypes } from 'react';
import { Button } from "antd";

import Module from "../lib/module";

class ModuleTitle extends Module {
    constructor(props) {
        super(props);
        this.state = {
            a: 2
        }
    }

    componentDidMount() {

    }

    myDemo() {
        
    }


    render() {
        return (
            <div className="ModuleTitle">
                <Button type="primary" onClick={()=>this.myDemo()}>Primary</Button>
            </div>
        )
    }


}

export default ModuleTitle;