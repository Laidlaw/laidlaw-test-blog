import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'
import catchLinks from 'catch-links'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  // inside MarkdownWrapper component
  contextTypes: {
    router: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    const _this = this;
    catchLinks(this.refs.markdown, function(href) {
      _this.context.router.push(href);
    });
  }


  render () {
    const { route } = this.props
    const post = route.page.data
    const htmlFromMarkdown = post.body

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1 style={{marginTop: 0}}>{post.title}</h1>

        <div ref="markdown" dangerouslySetInnerHTML={{__html: htmlFromMarkdown}} />
        <em
          style={{
            display: 'block',
            marginBottom: rhythm(2),
          }}
        >
          Posted {moment(post.date).format('MMMM D, YYYY')}
        </em>
        <hr
          style={{
            marginBottom: rhythm(2),
          }}
        />
        <ReadNext post={post} pages={route.pages} />
        <Bio />
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
