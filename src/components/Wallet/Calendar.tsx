import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { DatePicker } from '@material-ui/pickers'
import { addMonths, subMonths } from 'date-fns'
import { TextFieldProps, InputBase } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { ReactComponent as Arrow } from '../../images/Arrow.svg'

const CustomInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  padding: 0 5px;
  input {
    padding-top: 8px;
    padding-bottom: 5px;
    text-align: center;
  }
`
const ArrowIcon = styled(Arrow)`
  width: 15px;
  height: 15px;
`
const LeftArrow = styled(ArrowIcon)`
  transform: rotate(270deg);
`
const RightArrow = styled(ArrowIcon)`
  transform: rotate(90deg);
`

export const Calendar = () => {
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date())

  const renderInput = (props: TextFieldProps): any => {
    return (
      <CustomInput>
        <IconButton
          size="small"
          onClick={() => {
            handleDateChange((currentDate) => subMonths(currentDate!, 1))
          }}
        >
          <LeftArrow />
        </IconButton>
        <InputBase
          type="text"
          onClick={props.onClick}
          value={props.value}
          onChange={props.onChange}
        />
        <IconButton
          size="small"
          onClick={() => {
            handleDateChange((currentDate) => addMonths(currentDate!, 1))
          }}
        >
          <RightArrow />
        </IconButton>
      </CustomInput>
    )
  }

  return (
    <div>
      <DatePicker
        views={['year', 'month']}
        value={selectedDate}
        inputVariant="outlined"
        size="small"
        TextFieldComponent={renderInput}
        onChange={handleDateChange}
      />
    </div>
  )
}
