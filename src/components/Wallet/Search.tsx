import React from 'react'
import styled from 'styled-components'
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
} from '@material-ui/core'
import { ReactComponent as SearchIcon } from '../../images/Search.svg'

const StyledInput = styled(OutlinedInput)`
  input {
    padding: 8px;
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
        // value={values.password}
        // onChange={handleChange('password')}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </StyledFormControl>
  )
}
