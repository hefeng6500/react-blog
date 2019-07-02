import login from '../pages/user/login'
import index from '../pages/home/index.js'
import specialColumn from '../pages/specialColumn/index.js'
import literature from '../pages/literature/index.js'
import article from '../pages/article/index.js'
import addArticle from '../pages/addArticle/index.js'


import testRedux from '../pages/testRedux'

export default [
  { path: '/index', name: 'default', auth: false, component: index },
  { path: '/index', name: 'index', auth: false,  component: index },
  { path: '/specialColumn', name: 'specialColumn', auth: false,  component: specialColumn },
  { path: '/literature', name: 'literature', auth: false,  component: literature },
  { path: '/article/:id', name: 'article', auth: false,  component: article },
  { path: '/login', name: 'login', component: login },
  { path: '/testRedux', name: 'testRedux', component: testRedux },


  { path: '/addArticle', name: 'article', auth: true,  component: addArticle },
]