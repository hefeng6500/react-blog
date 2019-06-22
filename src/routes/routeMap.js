import login from '../pages/login'
import index from '../pages/home/index.js'
import specialColumn from '../pages/specialColumn/index.js'
import literature from '../pages/literature/index.js'

import testRedux from '../pages/testRedux'

export default [
  { path: '/', name: 'default', auth: false, component: index },
  { path: '/index', name: 'index', auth: false,  component: index },
  { path: '/specialColumn', name: 'specialColumn', auth: false,  component: specialColumn },
  { path: '/literature', name: 'literature', auth: false,  component: literature },
  { path: '/login', name: 'login', component: login },
  { path: '/testRedux', name: 'testRedux', component: testRedux },
]