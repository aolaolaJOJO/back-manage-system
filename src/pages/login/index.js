import React from 'react'
import './index.less'
import axios from 'axios'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
class NormalLoginForm extends React.Component {
    componentWillMount() {
      //   axios.post('/user/list',{name: 'lhj', age: 18}).then(function(response) {
    		// console.log(response);
      //   })
    }
    handleSubmit = (e) => {
	    this.props.form.validateFields((err, values) => {
	        axios.post('/user/register',values).then(function(response) {
	    		console.log(response);
	        })
	    });
	  }
	   handleClick = (e) => {
	   	axios.get('/user/list').then(function(response) {
	    		console.log(response);
	        })
	  }
	  handleDelete = (e) => {
	   	axios.post('/user/delete', {name: 'lhj'}).then(function(response) {
	    	console.log(response);
	    })
	  }
    render() {
        const { getFieldDecorator } = this.props.form;
	    return (
	      <Form onSubmit={this.handleSubmit} className="login-form">
	        <Form.Item>
	          {getFieldDecorator('name', {
	            rules: [{ required: true, message: 'Please input your name!' }],
	          })(
	            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="name" />
	          )}
	        </Form.Item>
	        <Form.Item>
	          {getFieldDecorator('age', {
	            rules: [{ required: true, message: 'Please input your age!' }],
	          })(
	            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="age" />
	          )}
	        </Form.Item>
	        <Form.Item>
	          <Button type="button" onClick={this.handleSubmit} className="login-form-button">
	            Log in
	          </Button>
	          <Button type="button" onClick={this.handleClick} className="login-form-button">
	            find
	          </Button>
	          <Button type="button" onClick={this.handleDelete} className="login-form-button">
	            deletea
	          </Button>
	        </Form.Item>
	      </Form>
    );
    }
}


const Login = Form.create({ name: 'Login' })(NormalLoginForm)

export default Login
