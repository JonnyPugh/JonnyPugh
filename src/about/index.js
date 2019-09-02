import React from 'react'
import Grid from '@material-ui/core/Grid'
import Background from './background'
import Headshot from './headshot'
import { Typography } from '@material-ui/core'

export default () => (
  <Grid
    direction="row"
    justify="center"
    alignItems="center"
    container
    spacing={3}
  >
    <Grid item xs={12}>
      <Typography variant="h3" align="center">
        About
      </Typography>
    </Grid>
    <Grid item xs>
      <Headshot />
    </Grid>
    <Grid item xs>
      <Background />
    </Grid>
  </Grid>
)
