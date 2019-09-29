import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Container, styled } from '@material-ui/core'

const GridItem = styled(Grid)({
  minWidth: '240px',
})

export default ({ children }) => (
  <Container maxWidth='lg'>
    <Grid container spacing={3}>
      {children.map((component, index) => (
        <GridItem item xs key={index}>
          {component}
        </GridItem>
      ))}
    </Grid>
  </Container>
)
