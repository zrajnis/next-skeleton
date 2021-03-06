const initialState = {
  foo: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FOO':
      return {
        ...state,
        foo: action.payload
      }
    default:
      return state
  }
}
