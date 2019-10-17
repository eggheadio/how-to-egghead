import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import metaImage from '../images/social-card.jpg'

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  image,
  timeToRead,
  categories,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
              {
                name: 'twitter:image',
                content: image || metaImage,
              },
              {
                name: 'image',
                content: image || metaImage,
              },
              {
                name: 'og:image',
                content: image || metaImage,
              },
              {
                name: 'twitter:label1',
                content: 'Time to read',
              },
              {
                name: 'twitter:data1',
                content: `${
                  timeToRead
                    ? `${timeToRead} ${timeToRead === 1 ? 'minute' : 'minutes'}`
                    : 'Instant'
                }`,
              },
              {
                name: 'twitter:label2',
                content: 'Category',
              },
              {
                name: 'twitter:data2',
                content: `${categories &&
                  categories.map(
                    (category, i) =>
                      `${i !== 0 ? ' ' : ''}${category.replace('-', ' ')}`
                  )}`,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', '),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
