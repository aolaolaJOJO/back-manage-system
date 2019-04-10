import React from 'react'
import axios from 'axios'
import {
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    message
} from 'antd';
class NormalRegisterForm extends React.Component {
    componentWillMount() {

    }
    handleFind = (e) => {
        axios.get('/user/list').then(function(response) {
            console.log(response);
        })
    }
    handleRegister = (e) => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('/user/register', values).then(function(response) {
                    console.log(response.data);
                    let res = response.data
                    if (res.code === 0) {
                        let result = res.data
                        message.success(result.msg)
                    } else {
                        message.error(res.msg)
                    }
                })
            }

        });
    }
    render() {
        const {
            getFieldDecorator
        } = this.props.form;
        return (
            <Form className="login-form">
                <Form.Item>
                  {getFieldDecorator('user', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="username" />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('pwd', {
                    rules: [{ required: true, message: 'Please input your pwd!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="pwd" />
                  )}
                </Form.Item>
                <Form.Item>
                  <Button type="button" onClick={this.handleRegister} className="login-form-button">
                    注册
                  </Button>
                  <Button type="button" onClick={this.handleFind} className="login-form-button">
                    查看
                  </Button>
                </Form.Item>
            </Form>
        );
    }
}


const Register = Form.create({
    name: 'Register'
})(NormalRegisterForm)

export default Register