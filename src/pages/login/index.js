import React from 'react'
import './index.less'
import {
	Link,
	withRouter
} from 'react-router-dom'
import axios from 'axios'
import {
	Form,
	Icon,
	Input,
	Button,
	Checkbox,
	message
} from 'antd';
@withRouter
class NormalLoginForm extends React.Component {
	handleLogin = (e) => {
		let self = this
		this.props.form.validateFields((err, values) => {
			axios.post('/user/login', values).then(function(response) {
				console.log(response.data);
				let res = response.data
				if (res.code === 0) {
					message.success(res.msg, function() {
						self.props.history.push('/admin/index')
					})
				} else {
					message.error(res.msg)
				}
			})
		});
	}
	// handleDelete = (e) => {
	// 	axios.post('/user/delete', {}).then(function(response) {
	// 		console.log(response);
	// 	})
	// }
	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
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
		);
	}
}


const Login = Form.create({
	name: 'Login'
})(NormalLoginForm)

export default Login