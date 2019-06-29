import request from '../utils/axios/request.js'

export const articleDetails = (params) => {
  return request({
    method: 'GET',
    // url: '/api/getArticleDetails',
    url: '/mocks/article.json',
    params
  })
}