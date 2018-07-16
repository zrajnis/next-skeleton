
import { bindPageContext } from 'utils/pageContext'
import { compose } from 'redux'
import { connect } from 'react-redux'

export default (mapStateToProps, mapDispatchToProps) =>
  Component => compose(
    connect(mapStateToProps, mapDispatchToProps),
    bindPageContext
  )(Component)
