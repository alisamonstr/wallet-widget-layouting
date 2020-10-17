import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  height: 2px;
  width: 100%;
  background-color: #e6e9ee;
  margin-top: -2px;
`

export const Divider = () => {
  return <StyledDiv></StyledDiv>
}
