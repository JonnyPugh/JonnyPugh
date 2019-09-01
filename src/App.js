import React from 'react';
import Navbar from './navigation';
import About from './about';
import { Container } from '@material-ui/core';

export default () => (
  <>
    <Navbar />
    <Container maxWidth="md">
      <About />
    </Container>
  </>
);
