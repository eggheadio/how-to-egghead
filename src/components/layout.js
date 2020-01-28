/** @jsx jsx */
import React from 'react'
import {jsx, Styled, Layout} from 'theme-ui'
import {Grid} from '@theme-ui/components'
import Card from './card'
import {Container} from '@theme-ui/components'
import {useStaticQuery, graphql} from 'gatsby'
import Link from './link'
import SEO from './seo'
import Header from './header'
import {MDXProvider} from '@mdx-js/react'
import ResponsiveEmbed from 'react-responsive-embed'
import {TwitterTweetEmbed} from 'react-twitter-embed'

export default ({
  children,
  title,
  image,
  description,
  timeToRead,
  categories,
  github,
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
    <Styled.root>
      <div sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <SEO
          title={title || data.site.siteMetadata.title}
          image={image}
          description={description}
          timeToRead={timeToRead}
          categories={categories}
        />
        <Header />
        <main sx={{minWidth: 0, flex: '1 1 auto'}}>
          <Container>
            <MDXProvider
              components={{
                TwitterTweetEmbed,
                ResponsiveEmbed,
                Card,
                Grid,
                Link,
                jsx,
              }}
            >
              {children}
            </MDXProvider>
          </Container>
        </main>
        <footer sx={{maxWidth: '80ch', mx: 'auto', py: [4, 5]}}>
          <a href={github} rel="nofollow">
            <strong>
              📝 <em>edit this page on github</em>
            </strong>
          </a>
        </footer>
      </div>
    </Styled.root>
  )
}
