import React from 'react'
import styled from 'styled-components'

import Todo from './todo'
import { TodoItem } from '../../types'

const Empty = styled.div`
  text-align: center;
  padding: 13px 0px;
  font-family: system-ui, sans-serif;
`

const _List = styled.ul`
  text-align: center;
  padding: 20px 0px;
  margin: 0px;
`

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
    return (<Empty className="empty">Empty</Empty>)
  }
  return (
    <_List>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          completed={todo.completed}
          text={todo.text}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </_List>
  )
}

export default List