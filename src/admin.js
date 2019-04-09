import React from 'react'
import {
    Link
} from 'react-router-dom'
export default class Admin extends React.Component {
    render() {
        return (
            <div>Home页面
                <Link to='/login'>login</Link>
                <Link to='/admin/index'>index</Link>
                <Link to='/admin/userManage'>user</Link>

                {this.props.children}
            </div>
        )
    }
}