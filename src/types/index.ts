export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export interface TodoItem {
	id: number
	text: string
	completed?: boolean
}

export interface AddTodoAction {
  type: typeof ADD_TODO
  payload: TodoItem,
}

export interface SetVisibilityFilterAction {
	type: typeof SET_VISIBILITY_FILTER,
	filter: string,
}

export interface ToggleTodoType {
	type: typeof TOGGLE_TODO,
	id: number
}

export type TodoActionTypes = AddTodoAction | SetVisibilityFilterAction | ToggleTodoType

export type AppActions = TodoActionTypes