import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container } from '@material-ui/core'
import Navbar from '../navigation'
import About from '../about'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

export default () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    <Container maxWidth='md'>
      <About />
    </Container>
  </ThemeProvider>
)
