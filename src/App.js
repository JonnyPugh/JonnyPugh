import React from 'react';
import { Typography } from '@material-ui/core';
import { jonathan, github, linkedin } from './images';


export default () => (
  <div style={{textAlign: 'center'}}>
    <Typography variant='h2'>Jonathan Pugh</Typography>
    <img src={jonathan} alt="Jonathan Pugh" />
    <Typography>
      Detail-oriented software engineer with a passion for cutting edge web
      technologies. April 2017 graduate of University of Michigan College of
      Engineering with a Bachelor's in Computer Science. Experience working in
      agile full-stack environments with a variety of technology stacks,
      test-driven development, CI/CD pipelines, cloud technologies, serverless
      architectures, open-source projects, and inner-source projects.
    </Typography>
    <a href="https://github.com/jonnypugh">
      <img src={github} alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/jonnypugh">
      <img src={linkedin} alt="LinkedIn" />
    </a>
  </div>
);
