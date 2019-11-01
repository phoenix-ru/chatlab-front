import { errors } from '~/model/Errors'

export function errorByStatus(status) {
  switch (status) {
    case 400: return errors.BAD_REQUEST
    case 401: return errors.AUTHENTICATION_REQUIRED
    case 403: return errors.ACCESS_FORBIDDEN
    case 404: return errors.NOT_FOUND
    case 412: return errors.PRECONDITION_FAILED
    case 500: return errors.INTERNAL_SERVER_ERROR
    default: return errors.UNKNOWN_ERROR
  }
}

export function wrap(f) {
  return f()
    .catch((e) => {
      let error = errors.NETWORK_UNAVAILABLE
      if (e.response) error = errorByStatus(e.response.status)
      return { error }
    })
}

export const get = (http, url, params) => wrap(() => {
  return http.get(url, { params })
})

export const post = (http, url, data, config, urlAppend) => wrap(() => {
  return http.post(urlAppend ? url + urlAppend : url, data, config)
})

export const put = (http, url, data, config, urlAppend) => wrap(() => {
  return http.put(urlAppend ? url + urlAppend : url, data, config)
})

export const _delete = (http, url, data, config, urlAppend) => wrap(() => {
  return http.delete(urlAppend ? url + urlAppend : url, data, config)
})
