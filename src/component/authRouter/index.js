import React from 'react'
import {
    withRouter
} from 'react-router-dom'
// 使用withRouter获得match location history属性
class AuthRoute extends React.Component {
    componentDidMount() {
        this.props.history.push('/login')
    }
    render() {
        return null
    }
}
const ShowTheLocationWithRouter = withRouter(AuthRoute);
export default ShowTheLocationWithRouter