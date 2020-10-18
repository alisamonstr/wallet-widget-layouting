import React from 'react'
import styled from 'styled-components/macro'
import QRcode from '../../images/QRcode.png'
import { IconButton } from '@material-ui/core'
import { ReactComponent as Arrow } from '../../images/Arrow.svg'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 60px;
  width: 100%;
  margin-top: 3px;
`
const QRcodPic = styled.div`
  height: 60px;
  width: 60px;
  background: url('${QRcode}') center center no-repeat;
  background-size: cover;
`
const Title = styled.div`
  font-weight: 500;
  opacity: 40%;
  text-transform: uppercase;
  font-size: 16px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 0 15px;
`
const Amount = styled.div`
  font-size: 32px;
  color: ${(p) => p.theme.palette.primary.main};
  line-height: 1;
`
const GreyLine = styled.div`
  position: relative;
  height: 3px;
  width: 135px;
  background-color: #f2f4f6;
`
const BlueLine = styled.div`
  position: absolute;
  height: 100%;
  width: 80%;
  background-color: #80d5ff;
`
const ArrowButton = styled(IconButton)`
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid ${(p) => p.theme.palette.primary.main};
  color: ${(p) => p.theme.palette.primary.main};
  &.MuiIconButton-root {
    border: 2px solid ${(p) => p.theme.palette.primary.main};
    margin-left: 10px;
  }
`
const ArrowDown = styled(Arrow)`
  transform: rotate(180deg);
`

export const WalletHeader = () => {
  return (
    <Container>
      <QRcodPic />
      <Wrapper>
        <Title>BTC WALLET</Title>
        <Amount color="primary">0,084643 BTC</Amount>
        <GreyLine>
          <BlueLine />
        </GreyLine>
      </Wrapper>
      <>
        <ArrowButton>
          <ArrowDown />
        </ArrowButton>
        <ArrowButton>
          <Arrow />
        </ArrowButton>
      </>
    </Container>
  )
}
