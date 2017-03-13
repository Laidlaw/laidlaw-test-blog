import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './alan-cropped.jpg'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={prefixLink(profilePic)}
          alt={`author ${config.authorName}`}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <strong>{config.authorName}</strong> is a Product Manager. <a href="https://twitter.com/alanlaidlaw">You should follow him on Twitter</a>
        Oh and you can <a href="/alanlaidlaw2017.pdf">hire him!</a>
      </p>
    )
  }
}

export default Bio
