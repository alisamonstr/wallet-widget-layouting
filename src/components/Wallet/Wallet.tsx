import React from 'react'
import styled from 'styled-components/macro'
import { Paper } from '@material-ui/core'
import { WalletHeader } from './WalletHeader'
import { ReactComponent as Dots } from '../../images/dots.svg'
import { Search } from './Search'
import { TabsComponent } from './TabsComponent'
import { Calendar } from './Calendar'
import { TransactionsTable } from './TransactionsTable'

const Container = styled(Paper)`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 75%;
  background: white;
  overflow: hidden;
  &.MuiPaper-root {
    border-radius: 10px;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin: 10px 15px 10px 5px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: auto;
`
const TextFieldsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Wallet = () => {
  return (
    <Container>
      <Content>
        <Dots />
        <Wrapper>
          <WalletHeader />
          <TabsComponent />
          <TextFieldsWrapper>
            <Search />
            <Calendar />
          </TextFieldsWrapper>
          <TransactionsTable />
        </Wrapper>
      </Content>
    </Container>
  )
}
