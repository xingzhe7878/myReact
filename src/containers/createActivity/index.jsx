import React, { Component, PropTypes } from 'react';
import { Button } from "antd";

import Module from "../../lib/module";
import ModuleBreadcrumb from "../../components/moduleBreadcrumb"

class CreateActivity extends Module {
    constructor(props) {
        super(props);
        this.state = {
            a: 1
        }
    }

    componentWillMount() {
        // console.log("componentWillMount");
    }

    componentDidMount() {
        // console.log("componentDidMount");
    }

    componentWillUpdate() {
        // console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        // console.log("componentDidUpdate");
    }

    render() {
        // console.log("render")
        return (
            <div className="">
                <ModuleBreadcrumb></ModuleBreadcrumb>
            </div>
        )
    }


}

export default CreateActivity;