import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createGlobalStyle } from 'styled-components'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const GlobalStyle = createGlobalStyle`
body {
    //margin: 0;
    //padding: 0;
    * {
      font-family: TTCommons, sans-serif;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  @font-face {
    font-family: "TTCommons";
    src: url("fonts/TTCommons-Regular.ttf");
    font-style: normal;
  } 
  @font-face {
    font-family: "TTCommons";
    src: url("fonts/TTCommons-Medium.ttf");
    font-weight: 500;
  }   
`
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
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
