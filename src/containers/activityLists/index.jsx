import React, { Component, PropTypes } from 'react';
import { Button } from "antd";

import Module from "../../lib/module";
import ModuleTitle from "../../components/moduleTitle"
import ModuleBreadcrumb from "../../components/moduleBreadcrumb"


class ActivityLists extends Module {
    constructor(props) {
        super(props);
        this.state = {
            a: 1
        }
    }

    componentDidMount() {

    }



    render() {
        return (
            <div className="activity-lists">
                <ModuleBreadcrumb></ModuleBreadcrumb>
                <ModuleTitle/>

            </div>
        )
    }


}

export default ActivityLists;