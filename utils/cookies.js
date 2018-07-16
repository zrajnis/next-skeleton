import _ from 'lodash'
import Cookies from 'universal-cookie'

import { getPageContext } from 'utils/pageContext'

const browserCookies = new Cookies()

const getCookies = () => {
  if (process.browser) {
    return browserCookies
  }

  return _.get(getPageContext(), 'req.universalCookies')
}

const get = (name, options) => getCookies().get(name, options)

const remove = (name, options) => getCookies().remove(name, options)

const set = (name, value, options) => getCookies().set(name, value, options)

export default {
  get,
  remove,
  set
}
