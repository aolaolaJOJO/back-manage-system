import React from 'react'
import {
    Link
} from 'react-router-dom'
import {
    Layout,
    Menu,
    Icon
} from 'antd';
import HeaderTop from './component/header'
import NavLeft from './component/navLeft'
import './admin.less'
const {
    Sider,
    Content,
    Header
} = Layout;

export default class Admin extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        className="nav-left"
                    >
                        <div className="logo">后台管理</div>
                        <NavLeft></NavLeft>
                    </Sider>
                    <Layout className="inner-layout">
                        <Header className="header">
                            <Icon
                              className="trigger"
                              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                              onClick={this.toggle}
                            />
                            <HeaderTop></HeaderTop>
                        </Header>
                        <div className="breadcrumb">用户管理</div>
                        <Content className="content">
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}