import page1 from './page1.route'
import page2 from './page2.route'

export default {
    path: '/',
    name: 'root',
    component: () => import('./root'),
    meta: {
        title: 'web框架'
    },
    children: [
      page1,
      page2,
    ]
}
