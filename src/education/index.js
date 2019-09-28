import React from 'react'
import { Typography } from '@material-ui/core'
import michigan from './michigan.png'
import { ImageCard } from '../common'

export default () => (
  <ImageCard src={michigan} alt='University of Michigan' title='Education'>
    <Typography variant='h6'>B.S.E. Computer Science, Music Minor</Typography>
    <Typography>University of Michigan College of Engineering</Typography>
    <Typography>September 2013 - April 2017</Typography>
  </ImageCard>
)
