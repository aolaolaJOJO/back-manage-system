import React from 'react'
import './index.less'
import {
	Link,
	withRouter,
	Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import { login } from '../../store/user.redux'

import {
	Form,
	Icon,
	Input,
	Button,
	Checkbox,
	message
} from 'antd'
@withRouter
@connect(state => state.user, {
	login
})
class NormalLoginForm extends React.Component {
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
			<div>
				{this.props.redirectTo && this.props.redirectTo !== '/login'?<Redirect to={this.props.redirectTo}/>:null}
				<Form className="login-form">
			        <Form.Item>
			          	{getFieldDecorator('user', {
			            	rules: [{ required: true, message: 'Please input your username!' }],
			          	})(
			            	<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
			          	)}
			        </Form.Item>
			        <Form.Item>
			          	{getFieldDecorator('pwd', {
			            	rules: [{ required: true, message: 'Please input your Password!' }],
			          	})(
			            	<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
			          	)}
			        </Form.Item>
			        <Form.Item>
			          	{getFieldDecorator('remember', {
			            	valuePropName: 'checked',
			            	initialValue: true,
			          	})(
			            	<Checkbox>Remember me</Checkbox>
			          	)}
			          	<a className="login-form-forgot" href="">Forgot password</a>
			          	<Button type="primary" onClick={this.handleLogin} className="login-form-button">
			            	登录
			          	</Button>
			          	Or <Link to="/register">register now!</Link>
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