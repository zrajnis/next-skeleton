import { HELLO } from 'constants/actions'

export const helloFoo = () => ({
  payload: 'foo',
  type: HELLO.FOO
})
