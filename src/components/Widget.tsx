import React from 'react'
import styled from 'styled-components'
import { Paper } from '@material-ui/core'
import { Wallet } from './Wallet/Wallet'

const Container = styled(Paper)`
  height: 400px;
  width: 680px;
  background: linear-gradient(#fff2af, #ffe1c5);
  color: #7a1414;
  &.MuiPaper-root {
    border-radius: 10px;
  }
`

export const Widget = () => {
  return (
    <Container>
      <Wallet />
    </Container>
  )
}
