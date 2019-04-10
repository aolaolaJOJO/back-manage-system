import React from 'react'
import {
    withRouter
} from 'react-router-dom'
import axios from 'axios'
// 使用withRouter获得match location history属性
class AuthRoute extends React.Component {
    componentDidMount() {
        const publicList = ['/login', '/register'];
        const pathname = this.props.location.pathname
        if (publicList.indexOf(pathname) > -1) {
            return;
        }
        axios.get('/user/getAuth').then(res => {
            if (res.data.code == 0) {
                this.props.history.push('/admin/index')
            } else {
                this.props.history.push('/login')
            }
        })
        this.props.history.push('/login')
    }
    render() {
        return null
    }
}
const ShowTheLocationWithRouter = withRouter(AuthRoute);
export default ShowTheLocationWithRouter