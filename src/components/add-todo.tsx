import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { AppActions } from '../types'

const AddTodo = ({ dispatch }: { dispatch: Dispatch<AppActions> }) => {
  let input: HTMLInputElement

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input type="text" ref={node => input = node as HTMLInputElement} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)