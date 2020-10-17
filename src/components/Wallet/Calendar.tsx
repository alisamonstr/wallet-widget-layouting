import React, { useState } from 'react'
import styled from 'styled-components'
import { DatePicker } from '@material-ui/pickers'

const StyledPicker = styled(DatePicker)`
  .MuiOutlinedInput-inputMarginDense {
    padding: 8px;
  }
`

export const Calendar = () => {
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date())

  return (
    <div>
      <StyledPicker
        variant="inline"
        views={['year', 'month']}
        value={selectedDate}
        inputVariant="outlined"
        size="small"
        leftArrowIcon={<div>123123</div>}
        onChange={handleDateChange}
      />
    </div>
  )
}
