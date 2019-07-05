import request from '../utils/axios/request.js'

export const articleDetails = (params) => {
  return request({
    method: 'GET',
    // url: '/api/getArticleDetails',
    url: '/mocks/article.json',
    params
  })
}

export const publish = (data) => {
  return request({
    method: 'POST',
    url: '/api/publishArticle',
    data
  })
}

export const saveDraft = (data) => {
  return request({
    method: 'POST',
    url: '/api/saveDraft',
    data
  })
}