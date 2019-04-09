import React from 'react'
import './index.less'
export default class Login extends React.Component {
    componentWillMount() {
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>Login页面</div>
        )
    }
}