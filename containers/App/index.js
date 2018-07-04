import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { helloFoo } from 'actions/hello'
import css from './style.scss'

class App extends Component {
  static getInitialProps ({ isServer, pathname, store, query }) {
    store.dispatch(helloFoo())

    return { custom: 'custom' }
  }

  render () {
    return (
      <div>
        <div className={css.hello}>Prop from Redux {this.props.hello.foo}</div>
        <div>Prop from getInitialProps {this.props.custom}</div>
      </div>
    )
  }
}

const mapStateToProps = state => state

App.propTypes = {
  custom: PropTypes.string,
  hello: PropTypes.shape({
    foo: PropTypes.string
  })
}

App.defaultProps = {
  custom: '',
  hello: {
    foo: ''
  }
}

export default connect(mapStateToProps)(App)
