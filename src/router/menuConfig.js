import Index from '../pages/index'
import User from '../pages/user'
const menuList = [{
    title: '首页',
    path: '/admin/index',
    component: Index
}, {
    title: '用户管理',
    path: '/admin/user',
    component: User
}];
export default menuList;