import React from 'react'
import styled from 'styled-components/macro'
import { Container } from '@material-ui/core'
import { Widget } from './components/Widget'

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

function App() {
  return (
    <Wrapper>
      <Widget />
    </Wrapper>
  )
}

export default App
