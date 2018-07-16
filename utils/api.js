import _ from 'lodash'
import fetch from 'isomorphic-fetch'
import cookieUtil from 'utils/cookies'

import error from 'utils/error'

const timeoutCode = 'request.timeout'
const { API_URL } = process.env

const parseJSON = async resp =>
  resp.json()
    .then(parsed => parsed)

const buildOptions = (body, options, method) => {
  const defaultOptions = {
    method
  }
  const token = cookieUtil.get('token')
  const isJSON = body != null &&
    typeof body === 'object' &&
    !(options['Content-Type'] === 'multipart/form-data')

  if (token) {
    _.set(defaultOptions, 'headers.Authorization', token)
  }

  if (isJSON) {
    _(defaultOptions)
      .set('headers.Content-Type', 'application/json')
      .set(defaultOptions, 'body', JSON.stringify(body))
  }

  return {
    ...defaultOptions,
    ...options
  }
}

const handleErrors = resp => {
  if (resp.status >= 400) {
    throw error(resp)
  }

  return resp
}

const api = method =>
  (path, body = {}, options = {}) =>
    new Promise((resolve, reject) => {
      const timeoutID = setTimeout(() => reject(new Error(timeoutCode)), 5000)

      fetch(`${API_URL}/${path}`, buildOptions(body, options, method))
        .then(parseJSON)
        .then(handleErrors)
        .then(resp => {
          clearTimeout(timeoutID)
          resolve(resp)
        })
        .catch(e => {
          clearTimeout(timeoutID)
          reject(e)
        })
    })

export default {
  del: api('DELETE'),
  get: api('GET'),
  post: api('POST'),
  put: api('PUT')
}
