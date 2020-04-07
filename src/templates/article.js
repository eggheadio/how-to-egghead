/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Flex} from '@theme-ui/components'
import React from 'react'
import {graphql} from 'gatsby'
import Link from '../components/link'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import dropRight from 'lodash/dropRight'
import defaultShareCard from '../images/social-card.png'
import TableOfContents, {TocToggle} from '../components/toc'
import {motion, AnimatePresence} from 'framer-motion'

const ArticleTemplate = ({data}) => {
  const article = data.mdx
  const {slug, github} = article.fields
  const showToc = article.frontmatter.showToc
  const [isVisibleToc, setIsVisibleToc] = React.useState(false)

  const breadCrumbs = dropRight(
    dropRight(
      slug.split('/').reduce((breadcrumbArray, path, idx) => {
        return [
          ...breadcrumbArray,
          {
            name: path,
            to: breadcrumbArray[idx - 1]
              ? `${breadcrumbArray[idx - 1].to}/${path}`.replace('//', '/')
              : path,
          },
        ]
      }, [])
    )
  )

  const image = `https://og-image-react-egghead.now.sh/instructor-guide/${encodeURI(
    article.frontmatter.title
  ).replace('?', '')}${
    article.frontmatter.shareImage
      ? `?bgImage=${encodeURI(article.frontmatter.shareImage)}&y=20200407`
      : '?y=20200407'
  }`

  const description = article.frontmatter.description || article.excerpt

  return (
    <Layout
      title={article.frontmatter.title}
      image={
        article.frontmatter.title
          ? image
          : `https://howtoegghead.com${defaultShareCard}`
      }
      description={description}
      github={github}
      timeToRead={article.timeToRead}
      categories={article.frontmatter.categories}
      slug={article.fields.slug}
      showToc={showToc}
      tocData={article.tableOfContents}
    >
      {breadCrumbs.length > 1 && (
        <nav sx={{mt: [3, 4]}}>
          {breadCrumbs.map((path, index) => {
            if (path.to === slug) return null
            return (
              <span
                sx={{display: 'inline-block', m: 0, paddingRight: '5px'}}
                key={path.name}
              >
                {index !== breadCrumbs.length ? (
                  <Link to={path.to}>{path.name}</Link>
                ) : (
                  path.name
                )}
                {/* {index < breadCrumbs.length  && '→'} */}
                <span sx={{opacity: 0.3}}>
                  {path.name && index !== breadCrumbs.length && ' / '}
                </span>
              </span>
            )
          })}
        </nav>
      )}
      <Flex sx={{justifyContent: 'space-between', mb: 4}}>
        {article.frontmatter.title && (
          <h1
            sx={{
              fontSize: [5, 5, 6],
              lineHeight: 'normal',
              letterSpacing: 'normal',
              mt: breadCrumbs.length > 1 ? 1 : [4, 5],
              mb: 0,
            }}
          >
            {article.frontmatter.title}
          </h1>
        )}
        {showToc && (
          <TocToggle
            isVisibleToc={isVisibleToc}
            setIsVisibleToc={setIsVisibleToc}
          />
        )}
      </Flex>
      <div sx={{'h1:first-of-type': {mt: [3, 5]}}}>
        <AnimatePresence>
          {showToc && isVisibleToc && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              sx={{
                position: 'fixed',
                overflowY: 'auto',
                width: '100%',
                height: '100%',
                top: [60, 80],
                left: 0,
                background: 'white',
                p: 3,
                pb: 5,
                display: ['block', 'block', 'none'],
              }}
            >
              <motion.div
                initial={{top: 25}}
                animate={{top: 0}}
                exit={{top: 25}}
                sx={{
                  width: '100%',
                  position: 'relative',
                }}
              >
                <TableOfContents
                  data={article.tableOfContents}
                  hideTitle
                  pageTitle={article.frontmatter.title}
                  slug={article.fields.slug}
                  sx={{top: 4, p: 0, opacity: 1, fontSize: '17px'}}
                  setState={setIsVisibleToc}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <MDXRenderer>{article.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleQuery($id: String) {
    mdx(id: {eq: $id}) {
      id
      excerpt(pruneLength: 250)
      body
      timeToRead
      tableOfContents
      fields {
        slug
        guide
        github
      }
      frontmatter {
        title
        shareImage
        categories
        showToc
      }
    }
  }
`
