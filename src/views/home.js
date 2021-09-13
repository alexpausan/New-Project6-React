import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project6</title>
        <meta property="og:title" content="New Project6" />
      </Helmet>
      <Link to="/about" className={styles['navlink']}>
        <h1 className={` ${styles['text']} ${projectStyles['thqLink']} `}>
          home
        </h1>
      </Link>
      <h1>Heading</h1>
      <AppComponent></AppComponent>
    </div>
  )
}

export default Home
