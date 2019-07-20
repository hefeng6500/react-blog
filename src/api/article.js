import request from '../utils/axios/request.js'

export const getArticles = (params) => {
  return request({
    method: 'GET',
    url: '/api/getArticles',
    params
  })
}

export const articleDetails = (params) => {
  return request({
    method: 'GET',
    url: '/api/getArticles',
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