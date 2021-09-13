import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>About - New Project6</title>
        <meta property="og:title" content="About - New Project6" />
      </Helmet>
      <h1>Heading salut</h1>
      <div
        className={` ${styles['container1']} ${projectStyles['salut']} `}
      ></div>
      <div className={styles['container2']}></div>
    </div>
  )
}

export default About
