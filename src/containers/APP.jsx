import React, { Component, PropTypes } from 'react';
import { Layout, Icon } from "antd";

import Module from "../lib/module";
import LeftMenu from "../components/leftMenu"

const { Header, Footer, Sider, Content } = Layout;


class App extends Module {
    constructor(props) {
        super(props);
        this.state= {
            autoHeight: null
        }
    }

    componentDidMount() {
        this.getAutoHeight();
    }

    //计算高度
    getAutoHeight() {
        let h = document.documentElement.clientHeight || document.body.clientHeight;
        this.setState({
            autoHeight: h
        });
    }

    render() {
        let state = this.state;
        return (
            <Layout style={{"minHeight":state.autoHeight}}>
                <Header style={{"backgroundColor": "#3089DC"}}>
                    管理系统
                </Header>
                <Layout>
                    <Sider style={{"backgroundColor": "#fff"}}>
                        <LeftMenu/>
                    </Sider>
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
                <Footer style={{"backgroundColor": "#fff"}}>Footer</Footer>
            </Layout>

        )
    }
}

export default App;
