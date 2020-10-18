import React from 'react'
import styled from 'styled-components/macro'
import { Paper } from '@material-ui/core'
import { Wallet } from './Wallet/Wallet'
import { SideBar } from './SideBar/SideBar'

const Container = styled(Paper)`
  display: flex;
  flex-direction: row;
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
      <SideBar />
    </Container>
  )
}
