import axios from 'axios'
import {
	message
} from 'antd';
// action type
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const FAILED = 'FAILED'
const LOGOUT = 'LOGOUT'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
	user: '',
	pwd: '',
	redirectTo: ''
}

// action
export function user(state = initState, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				redirectTo: '/admin/index',
				...action.payload
			}
		case FAILED:
			return {
				...state,
				msg: action.msg
			}
		case LOAD_DATA:
			return {
				...state,
				...action.payload
			}
		case LOGOUT:
			return {
				...initState,
				redirectTo: '/login'
			}
		default:
			return state
	}
}

// 登陆成功
function authSuccess(obj) {
	const {
		pwd,
		...data
	} = obj
	return {
		type: LOGIN_SUCCESS,
		payload: data
	}
}

function authFailed(msg) {
	return {
		type: FAILED,
		msg: msg
	}
}

// 刷新页面加载用户信息
export function loadData(userinfo) {
	return {
		type: LOAD_DATA,
		payload: userinfo
	}
}
export function login({
	user,
	pwd
}) {
	return dispatch => {
		axios.post('/user/login', {
				user,
				pwd
			})
			.then(res => {
				if (res.status === 200 && res.data.code === 0) {
					dispatch(authSuccess(res.data.data))
					message.success(res.data.msg)
				} else {
					dispatch(authFailed(res.data.msg))
					message.error(res.data.msg)
				}
			})
	}
}
export function register({
	user,
	pwd,
	type,
	avatar
}) {
	return dispatch => {
		axios.post('/user/register', {
				user,
				pwd,
				type,
				avatar
			})
			.then(res => {
				if (res.status === 200 && res.data.code === 0) {
					dispatch(authSuccess(res.data.data))
					message.success(res.data.msg)
				} else {
					dispatch(authFailed(res.data.msg))
					message.error(res.data.msg)
				}
			})
	}
}
// 登出
function logoutFunc() {
	return {
		type: LOGOUT
	}
}

export function logout() {
	return dispatch => {
		dispatch(logoutFunc())
	}
}