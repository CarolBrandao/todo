import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { setVisibilityFilter } from '../../actions'
import { AppActions } from '../../types'
import { AppState } from '../../index'
import Filter, { FilterOwnProps } from './filter'

const mapStateToProps = (state: AppState, ownProps: FilterOwnProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch<AppActions>, ownProps: FilterOwnProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)