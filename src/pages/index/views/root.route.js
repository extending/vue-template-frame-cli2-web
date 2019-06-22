import auth from './auth.route'
import page1 from './page1.route'
import page2 from './page2.route'
//TODO: 实现 首页 登录 注册 退出 修改密码 404

export default {
    path: '/',
    name: '',
    component: () => import('./root'),
    meta: {
        title: 'root'
    },
    children: [
      auth,
      page1,
      page2,
    ]
}
