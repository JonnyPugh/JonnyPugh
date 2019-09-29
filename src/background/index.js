import React from 'react'
import { Typography } from '@material-ui/core'
import jonathan from './jonathan.png'
import { SectionCard } from '../common'

export default () => (
  <SectionCard src={jonathan} alt='Jonathan Pugh' title='Background'>
    <Typography>
      I am a detail-oriented full-stack Software Engineer with a passion for
      cutting edge web technologies. I have experience working within agile
      teams with a variety of technology stacks. I have a continuous improvement
      mindset so I am constantly looking to apply new learning to solve
      problems. One of my greatest strengths as an engineer is that I raise the
      technical bar of teams and organizations that I work with.
    </Typography>
  </SectionCard>
)
