import React from 'react'
import { List, ListItemText } from '@material-ui/core'
import { SectionCard } from '../common'

const Position = ({ title, company, location, time, children }) => (
  <List>
    <ListItemText primaryTypographyProps={{ variant: 'h6' }}>
      {title}
    </ListItemText>
    <ListItemText primaryTypographyProps={{ variant: 'subtitle1' }}>
      {company} - {location}
    </ListItemText>
    <ListItemText primaryTypographyProps={{ variant: 'subtitle1' }}>
      {time}
    </ListItemText>
    <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
      {children}
    </ListItemText>
  </List>
)

export default () => (
  <SectionCard title='Experience'>
    <Position
      title='Software Engineer'
      company='Capital One'
      location='McLean VA'
      time='August 2018 - Present'
    >
      As a Software Engineer in Risk Tech, I build the web app and suite of
      microservices that serve as the Model governance system of record for
      Capital One. My primary goal on this team is to help the modeling
      community at Capital One pinpoint risks among deployed models and
      streamline documentation and remediation of those risks. This is
      imperative for the company because models are at the heart of Capital
      One's competitive advantage and they are responsible for making
      wide-reaching financial decisions on behalf of the company. While on this
      team I have delivered business-critical features as microservices,
      reinvented the architecture and CI/CD pipeline to enable automated
      microservice iteration, and championed new technologies while mentoring
      engineers and teams throughout Risk Tech.
    </Position>
    <Position
      title='Software Engineer'
      company='Capital One'
      location='Richmond VA'
      time='September 2017 - August 2018'
    >
      As a Software Engineer in Finance Tech, I built data pipelines to
      aggregate Finance data from all lines of business at Capital One and I
      created web apps to identify gaps in Finance data and improve data
      quality. These data pipelines were responsible for providing data input
      for critical models, reporting, and regulatory use cases. Some of my
      greatest achievements in Finance Tech were owning the development of a web
      app that provided searchability of Finance metadata from inception at a
      hackathon to production deployment, influencing the organization to
      embrace serverless architecture, and automating our software delivery
      process from development to production deployment.
    </Position>
  </SectionCard>
)
