import React from 'react'
import {
    withRouter
} from 'react-router-dom'
import {
    Layout,
    Icon
} from 'antd';
import HeaderTop from './component/header'
import NavLeft from './component/navLeft'
import menuList from './router/menuConfig'
import './admin.less'
const {
    Sider,
    Content,
    Header
} = Layout;
@withRouter
class Admin extends React.Component {
    state = {
        collapsed: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    getName = () => {
        let title = menuList.map(v => {
            if (v.path === this.props.location.pathname) {
                return v.title
            }
        }).filter(item => {
            if (item) {
                return item
            }
        })
        return title
    }
    render() {
        const name = this.getName()
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
                        <div className="breadcrumb">{name}</div>
                        <Content className="content">
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default Admin