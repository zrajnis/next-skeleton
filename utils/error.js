import _ from 'lodash'

import ERROR_CONST from 'constants/errors'

const mapConstant = code => _.get(ERROR_CONST, code, ERROR_CONST.fallback)

export default ({ code, status }) => {
  const error = new Error(mapConstant(code))

  error.code = code
  error.status = status

  return error
}
