import React from 'react'

import { Helmet } from 'react-helmet'

import './extended-portfolio.css'

const ExtendedPortfolio = (props) => {
  return (
    <div className="extended-portfolio-container">
      <Helmet>
        <title>Extended-Portfolio - Ruby Smith | MIXSMITH</title>
        <meta
          property="og:title"
          content="Extended-Portfolio - Ruby Smith | MIXSMITH"
        />
      </Helmet>
    </div>
  )
}

export default ExtendedPortfolio
