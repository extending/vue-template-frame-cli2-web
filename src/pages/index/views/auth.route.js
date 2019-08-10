import demo1 from './pages/demo-1.route'
import demo2 from './pages/demo-2.route'
import demo3 from './pages/demo-3.route'
import demo4 from './pages/demo-4.route'

export default {
  path: '',
  name: 'auth',
  component: () => import("./auth"),
  children: [
    demo1,
    demo2,
    demo3,
    demo4,
  ],
  meta: {
      title: 'auth'
  }
}
