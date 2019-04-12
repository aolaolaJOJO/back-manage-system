import React from 'react'
import axios from 'axios'
import {
    Form,
    Icon,
    Input,
    Button,
    Radio,
    Upload,
    Modal,
    message
} from 'antd';
import {
    connect
} from 'react-redux'
import {
    register
} from '../../store/user.redux'
import './index.less'

@connect(state => state.user, {
    register
})
class NormalRegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 2,
            previewVisible: false,
            previewImage: '',
            fileList: [],
        }
    }
    componentWillMount() {
        // axios.post('/user/delete', {
        //     user: '1'
        // }).then(res => {


        // })
    }
    handleCancel = () => this.setState({
        previewVisible: false
    })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleChange = ({
        fileList
    }) => this.setState({
        fileList
    })
    handleFind = (e) => {
        axios.get('/user/list').then(function(response) {
            console.log(response);
        })
    }
    handleRegister = (e) => {
        this.props.form.validateFields((err, values) => {
            const avatar = this.state.fileList.length ? {
                'avatar': this.state.fileList[0].thumbUrl
            } : ''
            const data = {
                ...values,
                ...avatar
            }
            if (values.pwd != values.repeatPwd) {
                message.error('两次密码输入不一致，请重新输入！')
                return
            }
            if (!err) {
                this.props.register(data);
            }
        });
    }
    render() {
        const {
            previewVisible,
            previewImage,
            fileList
        } = this.state;
        const {
            getFieldDecorator
        } = this.props.form;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="register">
                <Form className="register-form">
                    <Form.Item>
                      {getFieldDecorator('user', {
                        rules: [{ required: true, message: '请输入用户名！' }],
                      })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('pwd', {
                        rules: [{ required: true, message: '请输入密码！' }],
                      })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('repeatPwd', {
                        rules: [{ required: true, message: '请输入确认密码！' }],
                      })(
                        <Input prefix={<Icon type="unlock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="重复密码" />
                      )}
                    </Form.Item>
                    <Form.Item
                      label=""
                    >
                      {getFieldDecorator('type')(
                        <Radio.Group>
                          <Radio value='1'>管理员</Radio>
                          <Radio value='2'>普通用户</Radio>
                        </Radio.Group>
                      )}
                    </Form.Item>
                    <Form.Item>
                        <div className="clearfix">
                            <Upload
                              action="//jsonplaceholder.typicode.com/posts/"
                              listType="picture-card"
                              fileList={fileList}
                              onPreview={this.handlePreview}
                              onChange={this.handleChange}
                            >
                              {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                              <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                      </div>
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
            </div>
        );
    }
}


const Register = Form.create({
    name: 'Register'
})(NormalRegisterForm)

export default Register