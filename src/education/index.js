import React from 'react'
import { Typography } from '@material-ui/core'
import michigan from './michigan.png'
import { SectionCard } from '../common'

export default () => (
  <SectionCard src={michigan} alt='University of Michigan' title='Education'>
    <Typography variant='h6'>B.S.E. Computer Science, Music Minor</Typography>
    <Typography variant='subtitle1'>
      University of Michigan College of Engineering
    </Typography>
    <Typography variant='subtitle1'>September 2013 - April 2017</Typography>
  </SectionCard>
)
