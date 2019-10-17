import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {css} from '@emotion/core'
import SEO from './seo'
import Header from './header'
import {MDXProvider} from '@mdx-js/react'
import ResponsiveEmbed from 'react-responsive-embed'
import {TwitterTweetEmbed} from 'react-twitter-embed'

import {bpMaxSM, bpMaxMD} from '../utils/breakpoints'

const Layout = ({
  children,
  title,
  image,
  description,
  timeToRead,
  categories,
}) => {
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
        timeToRead={timeToRead}
        categories={categories}
      />
      <Header />
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
            'h1, h2, h3, h4': {
              '.autolink-header': {
                opacity: 0,
                marginLeft: -25,
                padding: 5,
                [bpMaxMD]: {
                  opacity: 1,
                  margin: 0,
                  padding: 0,
                },
              },
              ':hover': {
                '.autolink-header': {
                  opacity: 1,
                },
              },
            },
          }}>
          <MDXProvider components={{TwitterTweetEmbed, ResponsiveEmbed}}>
            {children}
          </MDXProvider>
        </div>
      </div>
    </>
  )
}

export default Layout
