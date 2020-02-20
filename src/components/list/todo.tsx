import React from 'react'
import PropTypes from 'prop-types'

interface TodoProps {
  text: string
  completed: boolean | undefined
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

const Todo = ({ onClick, completed, text } : TodoProps) => (
  <li
    className={completed ? 'item completed' : 'item'}
    onClick={onClick}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo