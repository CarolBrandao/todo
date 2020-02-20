import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import List from './list'
import { VisibilityFilters, toggleTodo } from '../../actions'
import { TodoItem, AppActions } from '../../types'
import { AppState } from '../../index'

const getVisibleTodos = (todos: TodoItem[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state: AppState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)