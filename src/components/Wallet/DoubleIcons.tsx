import React from 'react'
import styled from 'styled-components/macro'

import { ReactComponent as BitcoinRoundIcon } from '../../images/BitcoinRoundIcon.svg'
import { ReactComponent as ArrowRoundIcon } from '../../images/ArrowRoundIcon.svg'
import { ReactComponent as DollarRoundIcon } from '../../images/DollarRoundIcon.svg'

const RoundIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const TopArrowRoundIcon = styled(ArrowRoundIcon)`
  transform: rotate(180deg);
`
const SecondIcon = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50%;
  margin-top: -2px;
  margin-left: -5px;
`
interface DoubleIconProps {
  type: string
}
const getIconByType = (type: string) => {
  if (type === 'withdraw') {
    return <TopArrowRoundIcon />
  }
  if (type === 'deposit') {
    return <ArrowRoundIcon />
  }
  if (type === 'transfer') {
    return <BitcoinRoundIcon />
  }
  if (type === 'conversion') {
    return <DollarRoundIcon />
  }
  return <BitcoinRoundIcon />
}

export const DoubleIcon = ({ type }: DoubleIconProps) => {
  return (
    <RoundIconsWrapper>
      <BitcoinRoundIcon />
      <SecondIcon>{getIconByType(type)}</SecondIcon>
    </RoundIconsWrapper>
  )
}
