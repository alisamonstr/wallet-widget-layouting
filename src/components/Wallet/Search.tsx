import React from 'react'
import styled from 'styled-components/macro'
import { FormControl, InputAdornment, OutlinedInput } from '@material-ui/core'
import { ReactComponent as SearchIcon } from '../../images/Search.svg'

const StyledInput = styled(OutlinedInput)`
  input {
    padding-top: 10px;
    padding-bottom: 5px;
  }
`
const StyledFormControl = styled(FormControl)`
  flex: 1;
  margin-right: 20px;
  &.MuiFormControl-root {
    margin-right: 10px;
  }
`

export const Search = () => {
  return (
    <StyledFormControl variant="outlined" size="small">
      <StyledInput
        id="search"
        type="text"
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </StyledFormControl>
  )
}
