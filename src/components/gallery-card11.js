import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card11.css'

const GalleryCard11 = (props) => {
  return (
    <div className={`gallery-card11-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="gallery-card11-image"
      />
      <h2 className="gallery-card11-text">{props.title}</h2>
      <span className="gallery-card11-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard11.defaultProps = {
  title: 'Project Title',
  imageSrc:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&w=1500',
  imageAlt: 'image',
  rootClassName: '',
  subtitle: 'Lorem ipsum dolor sit amet',
}

GalleryCard11.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  subtitle: PropTypes.string,
}

export default GalleryCard11
