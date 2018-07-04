import { reducer as form } from 'redux-form'
import { combineReducers } from 'redux'
import hello from 'reducers/hello'

export default combineReducers({
  form,
  hello
})
