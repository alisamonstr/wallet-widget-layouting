import React, { useState } from 'react'
import styled from 'styled-components'
import { Divider } from './Divider'
import { format } from 'date-fns'
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core'
import { ReactComponent as Arrow } from '../../images/Arrow.svg'
import { ReactComponent as TransactionIcon } from '../../images/TransactionIcon.svg'
import { ReactComponent as ConversionIcon } from '../../images/ConversionIcon.svg'

const Wrapper = styled.div`
  margin-top: 10px;
`
const DateText = styled.div`
  font-size: 16px;
  opacity: 50%;
  margin: 5px 0;
`
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: #f2f4f6;
  border-radius: 50%;
  padding: 5px;
`
const ArrowDown = styled(Arrow)`
  transform: rotate(180deg);
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

export const TransactionsTable = () => {
  const currentDate = format(new Date(), 'dd.MM.yyyy')
  const mockData = [{ type: 'withdraw', status: 'pending', balance: 0.084643, amount: 0.00423 }]

  return (
    <Wrapper>
      <DateText>{currentDate}</DateText>
      <Divider />
      <TableContainer>
        <Table size="small">
          <TableBody>
            {mockData.map((item) => (
              <TableRow key={item.balance}>
                <TableCell component="th" scope="row">
                  <IconWrapper>{getTransactionIcon(item.type)}</IconWrapper>
                </TableCell>
                <TableCell align="right">{item.type}</TableCell>
                <TableCell align="right">{item.amount}BTC</TableCell>
                <TableCell align="right">{item.balance}BTC</TableCell>
                <TableCell align="right">{item.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  )
}
