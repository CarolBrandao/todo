import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

const Button = styled.button`
  ${color}
  border: none;
  color: white;
  padding: 15px;
  width: 100px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 4px 2px;
  cursor: pointer;
  ${props=> props.disabled && `    
    opacity: 0.7;
  `}
`

export interface FilterOwnProps {
  children: string
  filter: string
}

interface LinkStateProps {
	active: boolean
}

interface LinkDispatchProps {
	onClick: () => void
}

type FilterProps = LinkDispatchProps & LinkStateProps & FilterOwnProps

const Filter = (props: FilterProps ) => (
  <Button
    bg="green"
    onClick={props.onClick}
    disabled={props.active}
  >
    {props.children}
  </Button>
)

export default Filter
