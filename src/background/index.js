import React from 'react'
import { Typography } from '@material-ui/core'
import jonathan from './jonathan.png'
import { ImageCard } from '../common'

export default () => (
  <ImageCard src={jonathan} alt='Jonathan Pugh' title='Background'>
    <Typography>
      Detail-oriented software engineer with a passion for cutting edge web
      technologies. Experience working in agile full-stack environments with a
      variety of technology stacks, test-driven development, CI/CD pipelines,
      cloud technologies, serverless architectures, open-source projects, and
      inner-source projects.
    </Typography>
  </ImageCard>
)
