import React, { Component, PropTypes } from 'react';
import { Button } from "antd";

import Module from "../../lib/module";

class PageA extends Module {
    constructor(props) {
        super(props);
        this.state = {
            a: 1
        }
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {
        console.log("render")
        return (
            <div className="">
                <Button type="primary">primary</Button>
            </div>
        )
    }


}

export default PageA;