import React from 'react'

import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <h1>{props.heading1}</h1>
    </div>
  )
}

AppComponent.defaultProps = {
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: 'Heading',
}

AppComponent.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  heading1: PropTypes.string,
}

export default AppComponent
