import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { createMuiTheme, StylesProvider, ThemeProvider as MuiProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import { GlobalStyle } from './globalStyles'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#011C4D',
    },
  },
  typography: {
    fontFamily: ['TTCommons', 'Roboto', '"Helvetica Neue"'].join(','),
  },
})

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={theme}>
        <MuiProvider theme={theme}>
          <StylesProvider injectFirst>
            <GlobalStyle />
            <CssBaseline />
            <App />
          </StylesProvider>
        </MuiProvider>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
