import React, { Component } from 'react';
import { LinkStyled } from '../components/Arrow/ArrowStyles';
import { Button, Container, H1 } from './ExtrasStyles';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "50vh"
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40
    }
  }
}

export default class Extras extends Component {
  render() {
    return (
      <Container variants={containerVariants} initial='hidden' animate='show'>
        <H1>Do you want more information?</H1>
        <div>
          <Button>Yes, please</Button>
          <LinkStyled to={'/framer-motion-app/'}>
            <Button>No, back home</Button>
          </LinkStyled>
        </div>
      </Container>
    )
  }
}
