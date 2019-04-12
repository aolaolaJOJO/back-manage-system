import React from 'react'
import './index.less'
import {
	Link,
	withRouter,
	Redirect
} from 'react-router-dom'
import {
	connect
} from 'react-redux'
import {
	login
} from '../../store/user.redux'

import {
	Form,
	Icon,
	Input,
	Button,
} from 'antd'
import axios from 'axios'
@withRouter
@connect(state => state.user, {
	login
})
class NormalLoginForm extends React.Component {
	componentWillMount() {
		axios.post('/user/delete', {
			user: '88999'
		}).then(res => {


		})
	}
	handleLogin = (e) => {
		this.props.form.validateFields((err, values) => {
			this.props.login(values)
		});
	}
	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<div className="login">
				{this.props.redirectTo && this.props.redirectTo !== '/login'?<Redirect to={this.props.redirectTo}/>:null}
				<Form className="login-form">
			        <Form.Item>
			          	{getFieldDecorator('user', {
			            	rules: [{ required: true, message: '请输入用户名！' }],
			          	})(
			            	<Input prefix={<Icon type="user" className="icon" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
			          	)}
			        </Form.Item>
			        <Form.Item>
			          	{getFieldDecorator('pwd', {
			            	rules: [{ required: true, message: '请输入密码！' }],
			          	})(
			            	<Input prefix={<Icon type="lock" className="icon" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
			          	)}
			        </Form.Item>
			        <Form.Item>
			          	// <a className="login-form-forgot" href="#">忘记密码？</a>
			          	<Button type="primary" onClick={this.handleLogin} className="login-form-button">
			            	登录
			          	</Button>
			          	<Link to="/register" className="go-register">现在去注册</Link>
			        </Form.Item>
	      		</Form>
			</div>
		)
	}
}


const Login = Form.create({
	name: 'Login'
})(NormalLoginForm)

export default Login