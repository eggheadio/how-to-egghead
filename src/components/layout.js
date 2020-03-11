/** @jsx jsx */
import React from 'react'
import {jsx, Styled} from 'theme-ui'
import {Grid} from '@theme-ui/components'
import Card from './card'
import {
  Container,
  Box,
  Flex,
  Text,
  Link as StyledLink,
} from '@theme-ui/components'
import {useStaticQuery, graphql} from 'gatsby'
import Link from './link'
import SEO from './seo'
import Header from './header'
import {MDXProvider} from '@mdx-js/react'
import ResponsiveEmbed from 'react-responsive-embed'
import {TwitterTweetEmbed} from 'react-twitter-embed'
import TableOfContents from '../components/toc'

export default ({
  children,
  title,
  image,
  description,
  timeToRead,
  categories,
  github,
  slug,
  showToc,
  tocData,
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
        <Header showToc={showToc} />
        <div
          sx={{
            mt: [60, 20, 0],
            display: 'grid',
            gridTemplateColumns: [
              'auto',
              'auto',
              showToc ? '8fr 2.5fr' : '100%',
            ],
            maxWidth: ['70ch', '70ch', showToc ? 1200 : '70ch'],
            width: '100%',
            mx: 'auto',
          }}
        >
          <main sx={{minWidth: 0, flex: '1 1 auto'}}>
            <Container>
              <MDXProvider
                components={{
                  TwitterTweetEmbed,
                  ResponsiveEmbed,
                  Box,
                  Card,
                  Text,
                  Grid,
                  Flex,
                  Link,
                  StyledLink,
                  jsx,
                }}
              >
                {children}
              </MDXProvider>
            </Container>
          </main>
          {showToc && (
            <aside
              sx={{
                width: '100%',
                position: 'relative',
                display: ['none', 'none', 'block'],
              }}
            >
              <TableOfContents
                data={tocData}
                slug={slug}
                sx={{position: 'sticky', pt: '20vh', top: 0}}
              />
            </aside>
          )}
        </div>
        <footer
          sx={{
            maxWidth: ['80ch', '80ch', showToc ? 1200 : '80ch'],
            mx: 'auto',
            py: [4, 5],
          }}
        >
          <a href={github} rel="nofollow">
            <strong>
              <span role="img" aria-label="edit page">
                📝
              </span>{' '}
              <em>edit this page on github</em>
            </strong>
          </a>
        </footer>
      </div>
    </Styled.root>
  )
}
