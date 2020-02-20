import React from 'react'
import Filter from './filter'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <React.Fragment>
    <Filter filter={VisibilityFilters.SHOW_ALL}>
      All
    </Filter>
    <Filter filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </Filter>
    <Filter filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </Filter>
  </React.Fragment>
)

export default Footer