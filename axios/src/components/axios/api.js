import {
  fetch
} from './fetch'
import api from './url'
//   查看用户
export function lookOption (issuer, userId) {
  return fetch({
    url: api.Hallowmas + '/halloween/' + issuer + '/question',
    method: 'get',
    params: {
      currentUserId: userId
    }
  })
}
//   搜索
export function search (value) {
  return fetch({
    url: api.search,
    method: 'get',
    params: {
      keyword: value
    }
  })
}
