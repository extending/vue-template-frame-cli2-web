import page3 from './page3.route'
import page4 from './page4.route'

export default {
  path: '/',
  name: 'root',
  component: () => import('./root'),
  meta: {
    title: 'web框架'
  },
  children: [
    page3,
    page4
  ]
}


