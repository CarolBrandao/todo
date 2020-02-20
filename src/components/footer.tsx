import React from 'react'
import Filter from './filter'
import { VisibilityFilters } from '../actions'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`

const Footer = () => (
  <Wrapper>
    <Filter filter={VisibilityFilters.SHOW_ALL}>
      All
    </Filter>
    <Filter filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </Filter>
    <Filter filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </Filter>
  </Wrapper>
)

export default Footer