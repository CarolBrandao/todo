import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Item = styled.li`
  cursor: pointer;
  list-style-type: none;
  font-family: system-ui, sans-serif;
  padding-top: 6px;
  ${props => props.completed && `text-decoration: line-through;`}
`

interface TodoProps {
  text: string
  completed: boolean | undefined
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

const Todo = ({ onClick, completed, text } : TodoProps) => (
  
  <Item
    completed={completed}
    onClick={onClick}
  >
    {text}
  </Item>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo