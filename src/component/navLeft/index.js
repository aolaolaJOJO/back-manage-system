import React from 'react'
import {
    Link
} from 'react-router-dom'
import './index.less'
import {
    Menu,
    Icon
} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavLeft extends React.Component {
    render() {
        return (
            <div>
                <Menu mode="vertical" theme="dark">
                    <Menu.Item key="1">
                        <Link className="link" to="/admin/index">
                            <Icon type="pie-chart" />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link className="link" to="/admin/user">
                            <Icon type="pie-chart" />
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}