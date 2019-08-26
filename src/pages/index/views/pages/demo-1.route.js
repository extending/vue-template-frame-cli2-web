import Demo11 from './demo-1/demo-1-1.route'
import Demo12 from './demo-1/demo-1-2.route'

export default {
  path: 'demo-1',
  name: 'demo-1',
  component: () => import("./demo-1"),
  children: [
    Demo11,
    Demo12,
  ],
  meta: {
      title: '示例一'
  }
}
