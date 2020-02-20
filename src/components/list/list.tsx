import React from 'react'
import Todo from './todo'
import { TodoItem } from '../../types'

export interface ListOwnProps { 
}

interface LinkStateProps {
	todos: TodoItem[]
}

interface LinkDispatchProps {
	toggleTodo: ( id: number ) => void
}

type ListProps = LinkDispatchProps & LinkStateProps & ListOwnProps


function List({ todos, toggleTodo } :  ListProps ){
  if(todos.length === 0){
    return (<span className="empty">Empty</span>)
  }
  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          completed={todo.completed}
          text={todo.text}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </ul>
  )
}

export default List