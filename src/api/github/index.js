import request from '../../utils/axios/request.js'

export const getRepos = (params) => {
  return request({
    method: 'GET',
    url: '/github/users/hefeng6500/repos',
    params
  })
}


