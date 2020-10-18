import React from 'react'
import styled from 'styled-components/macro'
import { Divider } from './Divider'
import { format } from 'date-fns'
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core'

import { ReactComponent as Arrow } from '../../images/Arrow.svg'
import { ReactComponent as TransactionIcon } from '../../images/TransactionIcon.svg'
import { ReactComponent as ConversionIcon } from '../../images/ConversionIcon.svg'
import { ReactComponent as Pending } from '../../images/Pending.svg'
import { ReactComponent as OkIcon } from '../../images/OkIcon.svg'
import { ReactComponent as Failed } from '../../images/Failed.svg'
import { transactionsData } from './__mock__/transactions.mock'
import { DoubleIcon } from './DoubleIcons'

const Wrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  overflow: auto;
`
const Day = styled.div`
  margin-bottom: 10px;
`
const DateText = styled.div`
  font-size: 16px;
  opacity: 50%;
  margin: 5px 0;
`
const StyledTableContainer = styled(TableContainer)`
  overflow-x: inherit;
`
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: #f2f4f6;
  border-radius: 50%;
  padding: 6px;
  margin-bottom: -10px;
`
const ArrowDown = styled(Arrow)`
  transform: rotate(180deg);
`
const StyledCell = styled(TableCell)`
  padding: 15px 5px 0 0;
  line-height: 1;
`
const TypeCell = styled(TableCell)`
  max-width: 32px;
  min-width: 32px;
  height: 40px;
  padding: 6px 3px 3px 0;
  border: none;
`
const TypeName = styled.div`
  color: ${(p) => p.theme.palette.primary.main};
  font-weight: 500;
  font-size: 20px;
  text-transform: capitalize;
`
const Amount = styled.div`
  color: ${(p) => p.theme.palette.text.disabled};
  font-size: 14px;
  font-weight: 500;
`
const Balance = styled.div`
  color: ${(p) => p.theme.palette.primary.main};
  font-size: 20px;
`

const getTransactionIcon = (type: string) => {
  if (type === 'withdraw') {
    return <Arrow />
  }
  if (type === 'deposit') {
    return <ArrowDown />
  }
  if (type === 'transfer') {
    return <TransactionIcon />
  }
  if (type === 'conversion') {
    return <ConversionIcon />
  }
  return <Arrow />
}
const getStatusIcon = (status: string) => {
  if (status === 'pending') {
    return <Pending />
  }
  if (status === 'ok') {
    return <OkIcon />
  }
  if (status === 'failed') {
    return <Failed />
  }
}

export const TransactionsTable = () => {
  return (
    <Wrapper>
      {transactionsData.map((data) => (
        <Day key={data.date}>
          <DateText>{format(data.date, 'dd.MM.yyyy')}</DateText>
          <Divider />
          <StyledTableContainer>
            <Table size="small">
              <TableBody>
                {data.transactions.map((item) => (
                  <TableRow key={item.balance}>
                    <TypeCell padding="none">
                      <IconWrapper>{getTransactionIcon(item.type)}</IconWrapper>
                    </TypeCell>
                    <StyledCell align="left">
                      <TypeName>{item.type}</TypeName>
                    </StyledCell>
                    <StyledCell align="left">
                      <DoubleIcon type={item.type} />
                    </StyledCell>
                    <StyledCell align="left">
                      <Amount>{item.amount} BTC</Amount>
                    </StyledCell>
                    <StyledCell align="left">
                      <Balance>{item.balance} BTC</Balance>
                    </StyledCell>
                    <StyledCell align="left">{getStatusIcon(item.status)}</StyledCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
        </Day>
      ))}
    </Wrapper>
  )
}
