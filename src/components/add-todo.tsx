import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { AppActions } from '../types'

const Button = styled.button`
  ${color}
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 11px;
  cursor: pointer;
  padding: 13px;
  border-radius: 0px 5px 5px 0px;
  border: none;
`

const Input = styled.input`
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px 0px 0px 5px;
  box-sizing: border-box;
`

const Wrapper = styled.div`
  text-align: center;
  padding-top: 10%;
`

const AddTodo = ({ dispatch }: { dispatch: Dispatch<AppActions> }) => {
  let input: HTMLInputElement

  return (
    <Wrapper>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <Input type="text" ref={node => input = node as HTMLInputElement} />
        <Button bg="green" type="submit">
          +
        </Button>
      </form>
    </Wrapper>
  )
}

export default connect()(AddTodo)