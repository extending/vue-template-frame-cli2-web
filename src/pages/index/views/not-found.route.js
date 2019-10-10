export default {
  path: '(.*)?',
  name: 'not-found',
  component: () => import('./not-found'),
  meta: {
    title: 'Not Found'
  }
}
