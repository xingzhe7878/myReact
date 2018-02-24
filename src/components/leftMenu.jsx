import React, { Component, PropTypes } from 'react';
import { Menu, Icon } from "antd";
import { NavLink } from 'react-router-dom'

import Module from "../lib/module";

const { SubMenu } = Menu;
const MenuItem = Menu.Item;

class LeftMenu extends Module {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        let locationHash = location.hash.replace("#", "");
        return (
            <Menu
                mode="inline"
                defaultOpenKeys={["CXGJ"]}
                selectedKeys={[locationHash]}
            >
                <SubMenu key="CXGJ" title={<span><span>促销工具</span></span>}>
                    <MenuItem key="/">
                        <NavLink to="/">首页</NavLink>
                    </MenuItem>
                    <MenuItem key="/ActivityLists">
                        <NavLink to="/ActivityLists">活动列表</NavLink>
                    </MenuItem>
                    <MenuItem key="/CreateActivity">
                        <NavLink to="/CreateActivity">新建活动</NavLink>
                    </MenuItem>
                    <MenuItem key="/SearchBaby">
                        <NavLink to="/SearchBaby">宝贝查询</NavLink>
                    </MenuItem>
                    <MenuItem key="/SearchSend">
                        <NavLink to="/SearchSend">赠送查询</NavLink>
                    </MenuItem>
                </SubMenu>
            </Menu>
        )
    }
}

export default LeftMenu;
