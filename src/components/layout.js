/** @jsx jsx */
import React from 'react'
import {jsx, Styled, Main, Footer, Layout} from 'theme-ui'
import {Container} from '@theme-ui/components'
import {useStaticQuery, graphql} from 'gatsby'
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
      <Layout>
        <SEO
          title={title || data.site.siteMetadata.title}
          image={image}
          description={description}
          timeToRead={timeToRead}
          categories={categories}
        />
        <Header />
        <Main>
          <Container>
            <MDXProvider components={{TwitterTweetEmbed, ResponsiveEmbed}}>
              {children}
            </MDXProvider>
          </Container>
        </Main>
        <Footer>
          <a href={github} rel="nofollow">
            <strong>
              📝 <em>edit this page on github</em>
            </strong>
          </a>
        </Footer>
      </Layout>
    </Styled.root>
  )
}
