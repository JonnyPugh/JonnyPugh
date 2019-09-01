import React from 'react';
import { Typography } from '@material-ui/core';
import Navbar from './navigation';
import { jonathan } from './images';

export default () => (
  <>
    <Navbar />
    <div style={{ textAlign: 'center' }}>
      <img src={jonathan} alt="Jonathan Pugh" />
      <Typography>
        Detail-oriented software engineer with a passion for cutting edge web
        technologies. April 2017 graduate of University of Michigan College of
        Engineering with a Bachelor's in Computer Science. Experience working in
        agile full-stack environments with a variety of technology stacks,
        test-driven development, CI/CD pipelines, cloud technologies, serverless
        architectures, open-source projects, and inner-source projects.
      </Typography>
    </div>
  </>
);
