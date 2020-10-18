import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Arrow } from '../../images/Arrow.svg'
import { ReactComponent as BigArrowIcon } from '../../images/BigArrowIcon.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px 10px;
`
const ArrowWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const RotatedArrow = styled(Arrow)`
  transform: rotate(-90deg);
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  padding: 20px 0;
`
const TextWrapper = styled.div`
  padding: 0 10px;
`
const Title = styled.div`
  font-size: 20px;
  opacity: 50%;
  text-align: center;
  line-height: 25px;
  padding-bottom: 10px;
`
const Description = styled.div`
  font-size: 12px;
  opacity: 50%;
  text-align: center;
`
const Link = styled.div`
  font-weight: 500;
  font-size: 16px;
  text-decoration: underline;
`

export const SideBar = () => {
  return (
    <Container>
      <ArrowWrapper>
        <RotatedArrow />
      </ArrowWrapper>
      <Content>
        <BigArrowIcon />
        <TextWrapper>
          <Title>Return Your Fees for invited friends</Title>
          <Description>Return Your Fees for invited friends for invited friends</Description>
        </TextWrapper>
        <Link> Let’s recommend</Link>
      </Content>
    </Container>
  )
}
