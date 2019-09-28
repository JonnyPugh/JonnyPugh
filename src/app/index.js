import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from '../navigation'
import AppContainer from '../container'
import Background from '../background'
import Education from '../education'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

export default () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    <AppContainer>
      <Background />
      <Education />
    </AppContainer>
  </ThemeProvider>
)
