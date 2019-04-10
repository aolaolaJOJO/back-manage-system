const express = require('express')
const Router = express.Router()
const http = require('http')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').Server(app)
const cookieParser = require('cookie-parser')
const model = require('./model')
const User = model.getModel('user')

// var mongoose = require('mongoose')
// mongoose.deleteModel('user');
// 登录
Router.post('/login', function(req, res) {
    const {
        user,
        pwd
    } = req.body
    User.findOne({
        user: user,
        pwd: pwd
    }, function(err, adventure) {
        if (adventure) {
            res.cookie('userid', adventure._id)
            return res.json({
                code: 0,
                data: adventure,
                msg: '登录成功！'
            })
        } else {
            return res.json({
                code: -1,
                msg: '用户名或者密码错误！'
            })
        }
    })
})
// 注册
Router.post('/register', function(req, res) {
    const {
        user,
        pwd
    } = req.body
    const userModel = new User({
        user,
        pwd
    })
    User.find({
        user: user
    }, function(err, docs) {
        if (!err && docs.length >= 1) {
            return res.json({
                code: -1,
                msg: '该用户已被注册！'
            })
        }
        userModel.save(function(e, d) {
            if (e) {
                return res.json({
                    code: 1,
                    msg: '后端出错了'
                })
            }
            const {
                user,
                pwd,
                _id
            } = d
            return res.json({
                code: 0,
                data: {
                    msg: '恭喜您注册成功！',
                    user,
                    pwd,
                    _id
                }
            })
        })
    })
    // res.json({'name': '123'})
})
// 查询用户列表
Router.get('/list', function(req, res) {
    User.find({}, function(err, docs) {
        return res.json({
            code: 0,
            data: docs
        })
    })
})
// 删除
Router.post('/delete', function(req, res) {
    const {
        user
    } = req.body
    User.deleteMany({
        user: user
    }, function(err, docs) {
        return res.json({
            code: 0,
            data: docs
        })
    })
})
// 校验cookie 是否需要登录
Router.get('/getAuth', function(req, res) {
    const {
        userid
    } = req.cookies
    if (!userid) {
        return res.json({
            code: 1
        })
    }
    User.findOne({
        _id: userid
    }, function(err, adventure) {
        if (err) {
            return res.json({
                code: 1,
                msg: '后端出错了'
            })
        }
        if (adventure) {
            return res.json({
                code: 0,
                data: adventure
            })
        }
    })
})
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/user', Router)
/*创建一个web服务器-链式调用*/
server.listen(1234, function() {
    console.log('server start');
})