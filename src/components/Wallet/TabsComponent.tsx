import React, { useState } from 'react'
import styled from 'styled-components'
import { FormControl, Tab, Tabs } from '@material-ui/core'
import { Divider } from './Divider'

const Wrapper = styled.div`
  margin: 10px 0;
`
const StyledTabs = styled(Tabs)`
  &.MuiTabs-root {
    min-height: 30px;
  }
  //.MuiTabs-indicator {
  //  background-color: black;
  //}
`
const StyledTab = styled(Tab)`
  &.MuiTab-root {
    min-width: auto;
    min-height: auto;
    padding: 0 10px 0 5px;
    text-transform: none;
    font-size: 16px;
  }
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
