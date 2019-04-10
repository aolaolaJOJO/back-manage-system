import React from 'react'
import {
    withRouter
} from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadData } from '../../store/user.redux'

@withRouter
@connect(null, {
    loadData
})
// 使用withRouter获得match location history属性
class AuthRoute extends React.Component {
    componentDidMount() {
        const publicList = ['/login', '/register'];
        const pathname = this.props.location.pathname
        if (publicList.indexOf(pathname) > -1) {
            return;
        }
        axios.get('/user/getAuth').then(res => {
            if (res.status === 200) {
                if (res.data.code == 0) {
                    this.props.loadData(res.data.data)
                    this.props.history.push(pathname)
                } else {
                    this.props.history.push('/login')
                }
            }
            
        })
    }
    render() {
        return null
    }
}
export default AuthRoute