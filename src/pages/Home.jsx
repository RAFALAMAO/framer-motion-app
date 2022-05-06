import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import R from '../components/Arrow/R'
import { Rafalamao } from '../components/Arrow/Rafalamao'
import { HomeContainer } from './HomeStyles'

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

export default class Home extends Component {
  render() {
    return (
      <HomeContainer variants={containerVariants} initial='hidden' animate='show'>
        <a href="/framer-motion-app/">
          <R/>
        </a>
        <Link to={'/framer-motion-app/about'}>
          <Rafalamao/>
        </Link>
      </HomeContainer>
    )
  }
}
