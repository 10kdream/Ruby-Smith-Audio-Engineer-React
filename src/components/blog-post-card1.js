import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card1.css'

const BlogPostCard1 = (props) => {
  return (
    <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="blog-post-card1-image1"
      />
      <div className="blog-post-card1-container1">
        <span className="blog-post-card1-text1">{props.label}</span>
        <span className="blog-post-card1-text2">{props.title}</span>
        <span className="blog-post-card1-text3">{props.description}</span>
        <div className="blog-post-card1-container2">
          <div className="blog-post-card1-profile">
            <img
              alt={props.profileAlt}
              src={props.profileSrc}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="blog-post-card1-image2"
            />
            <span className="blog-post-card1-text4">{props.author}</span>
          </div>
          <span className="blog-post-card1-text5">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard1.defaultProps = {
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  profileSrc:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  time: '5 min read',
  title: 'Lorem ipsum dolor sit amet',
  author: 'Jon Doe',
  profileAlt: 'profile',
  label: 'ENTERPRISE',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  rootClassName: '',
}

BlogPostCard1.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  profileSrc: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  profileAlt: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard1
