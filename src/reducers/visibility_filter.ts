import { VisibilityFilters } from '../actions'
import { TodoActionTypes } from '../types'

const visibilityFilterInitialState: string = VisibilityFilters.SHOW_ALL

const visibilityFilter = (state = visibilityFilterInitialState, action: TodoActionTypes): string => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter