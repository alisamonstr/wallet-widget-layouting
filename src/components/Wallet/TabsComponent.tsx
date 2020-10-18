import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Tab, Tabs } from '@material-ui/core'
import { Divider } from './Divider'

const Wrapper = styled.div`
  margin: 10px 0;
`
const StyledTabs = styled(Tabs)`
  min-height: 30px;
`
const StyledTab = styled(Tab)`
  min-width: auto;
  min-height: auto;
  padding: 3px 5px 0 5px;
  margin-right: 5px;
  text-transform: none;
  font-size: 16px;
`

export const TabsComponent = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Wrapper>
      <StyledTabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <StyledTab label="Events" />
        <StyledTab label="Limits" />
      </StyledTabs>
      <Divider />
    </Wrapper>
  )
}
