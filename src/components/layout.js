import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {css} from '@emotion/core'
import SEO from './seo'

import {bpMaxSM} from '../utils/breakpoints'

const Layout = ({children, title, image, description}) => {
  const data = useStaticQuery(graphql`
    query ArticleTemplateQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <SEO
        title={title || data.site.siteMetadata.title}
        image={image}
        description={description}
      />
      <div
        css={css`
          display: flex;
          ${bpMaxSM} {
            flex-direction: column;
          }
        `}>
        <div
          css={{
            margin: '2rem auto',
            [bpMaxSM]: {
              margin: '0 auto',
            },
            maxWidth: '960px',
            width: '100%',
            padding: '0 1.0875rem 0 1.0875rem',
            paddingTop: 0,
          }}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
