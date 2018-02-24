import React, { Component, PropTypes } from 'react';
import { Breadcrumb } from "antd";
import { NavLink } from 'react-router-dom'

import Module from "../lib/module";

class ModuleBreadcrumb extends Module {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    getBreadcrumbItem() {
        let locationHashArr = location.hash.split("/");
        switch (locationHashArr[1]) {
            case "ActivityLists":
                return (
                    <Breadcrumb.Item>
                        <NavLink to="/ActivityLists">活动列表</NavLink>
                    </Breadcrumb.Item>
                );
            break;
            case "CreateActivity":
                return (
                    <Breadcrumb.Item>
                        <NavLink to="/CreateActivity">新建活动</NavLink>
                    </Breadcrumb.Item>
                );
            break;
        }
    }

    render() {

        return (
            <Breadcrumb style={{"margin": "10px"}}>
                <Breadcrumb.Item>
                    <NavLink to="/">促销工具</NavLink>
                </Breadcrumb.Item>
                {this.getBreadcrumbItem()}
            </Breadcrumb>
        )
    }
}

export default ModuleBreadcrumb;
