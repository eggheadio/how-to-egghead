import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Link from './link'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import reset from '../utils/reset'
import SEO from './seo'
import './layout-styles.css'
import { bpMaxSM } from '../utils/breakpoints'
import Sidebar from './sidebar'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQueryGuide {
        site {
          siteMetadata {
            title
          }
        }
        allMdx(
          sort: { order: ASC, fields: fields___slug }
          filter: { frontmatter: { guide: { eq: "instructor" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                slug
                guide
                chapterTitle
              }
            }
          }
        }
      }
    `}
    render={data => (
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
          <Link to="/review" aria-label="Go to reviewer guide">
            <Button
              css={css`
                ${bpMaxSM} {
                  display: none;
                }
              `}>
              Reviewer guide
            </Button>
          </Link>
          <Sidebar />
          <Main>{children}</Main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Main = styled.main`
  margin: 2rem auto;
  ${bpMaxSM} {
    margin: 0 auto;
  }
  max-width: 960px;
  width: 100%;
  padding: 0 1.0875rem 0 1.0875rem;
  padding-top: 0;
`

const Button = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  a {
    color: #1f2933;
  }
  transition: all 250ms ease;
  font-size: 16px;
  :hover {
    background: #e8ecf3;
    transition: all 250ms ease;
    span {
      color: #3e4c59;
    }
  }
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 0 0 5px 5px;
  background: #f5f7fa;
  ${bpMaxSM} {
    top: 15px;
    border-radius: 3px;
    font-size: 15px;
    background: #323f4b;
    a {
      color: #f5f7fa;
    }
  }
`

export default Layout
