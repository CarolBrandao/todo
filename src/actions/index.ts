import { AppActions, ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from '../types'

let nextTodoId = 0

export const addTodo = (text: string) : AppActions => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text
  }
})

export const setVisibilityFilter = ( filter: string ) : AppActions => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = ( id: number ) : AppActions => ({
  type: TOGGLE_TODO,
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}