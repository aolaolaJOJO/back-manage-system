import Index from '../pages/index'
import UserManage from  '../pages/userManage'
const menuList = [{
    title: '首页',
    path: '/admin/index',
    component: Index
}, {
    title: '用户管理',
    path: '/admin/userManage',
    component: UserManage
}];
export default menuList;