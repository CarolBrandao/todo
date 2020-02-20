import React from 'react'

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
  <button
    onClick={props.onClick}
    disabled={props.active}
  >
    {props.children}
  </button>
)

export default Filter
