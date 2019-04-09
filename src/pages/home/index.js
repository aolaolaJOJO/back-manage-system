import React from 'react'
import {
    Link
} from 'react-router-dom'
import './index.less'
export default class Home extends React.Component {
    render() {
        return (
            <div>Home页面
                <Link to='/login'>login</Link>
                <Link to='/home/index'>index</Link>
                <Link to='/home/userManage'>user</Link>
            </div>
        )
    }
}