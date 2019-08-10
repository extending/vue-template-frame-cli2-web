import demo1 from './pages/demo-1.route'

export default {
  path: '',
  name: 'auth',
  component: () => import("./auth"),
  children: [
    demo1
  ],
  meta: {
      title: 'auth'
  }
}
