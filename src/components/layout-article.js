import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import reset from '../utils/reset'
import SEO from './seo'
import './layout-styles.css'

import { bpMaxSM } from '../utils/breakpoints'

const ArticleLayout = ({ children }) => {
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
      <Global styles={reset} />
      <SEO title={data.site.siteMetadata.title} />
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

export default ArticleLayout
