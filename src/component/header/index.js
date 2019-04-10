import React from 'react'
import {
    Link,
    Redirect
} from 'react-router-dom'
import './index.less'
import axios from 'axios'
import { connect } from 'react-redux'
import { logout } from '../../store/user.redux'

@connect(state => state.user, {
    logout
  })
class HeaderTop extends React.Component {
	constructor(props) {
		super(props)
	}
    handleLogout = () => {
        this.props.logout()
    } 
    render() {
        return this.props.user ? (
            <div className="header-inner">
			     欢迎您，{this.props.user}
                <span className="logout" onClick={this.handleLogout}>退出</span>
            </div> ) : <Redirect to={this.props.redirectTo}/>
        
    }
}
export default HeaderTop