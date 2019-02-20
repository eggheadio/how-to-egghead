import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Link from './link'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import reset from '../utils/reset'
import './layout.css'
import SEO from './seo'
import logo from '../images/egghead-logo.svg'
import { bpMaxSM, bpMaxMD, bpMinLG } from '../utils/breakpoints'

const LayoutReview = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQueryReview {
        site {
          siteMetadata {
            title
          }
        }
        allMdx(
          sort: { order: ASC, fields: [frontmatter___chapter] }
          filter: { fileAbsolutePath: { regex: "//reviewerguide/" } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                slug
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
          <SideBar>
            <div
              css={css`
                overflow-y: auto;
                height: 100%;
              `}>
              <Logo>
                <Link
                  to='/'
                  css={css`
                    display: flex;
                    align-items: center;
                    width: 100%;
                    color: inherit;
                  `}
                  aria-label='Scroll to top'>
                  <img src={logo} alt='How to egghead' />
                  <h1>Reviewer Guide</h1>
                </Link>
              </Logo>
              <div
                css={css`
                  padding-right: 30px;
                `}>
                <ul
                  css={css`
                    list-style: none;
                  `}>
                  {data.allMdx.edges.map(({ node: data }) => (
                    <span key={data.id}>
                      {data.frontmatter.chapterTitle && (
                        <Link
                          to={`#${data.frontmatter.slug}`}
                          css={css`
                            * {
                              color: black;
                              :hover {
                                color: blue;
                                cursor: pointer;
                              }
                            }
                          `}>
                          <h4>{data.frontmatter.chapterTitle}</h4>
                        </Link>
                      )}

                      <Link
                        to={`#${data.frontmatter.slug}`}
                        activeClassName='active'>
                        <li>{data.frontmatter.title}</li>
                      </Link>
                    </span>
                  ))}
                </ul>
              </div>
            </div>
          </SideBar>
          <main
            style={{
              margin: '2.45rem auto',
              maxWidth: 960,
              width: '100%',
              padding: '0 1.0875rem 0 1.0875rem',
              paddingTop: 0,
            }}>
            {children}
          </main>
        </div>
      </>
    )}
  />
)

LayoutReview.propTypes = {
  children: PropTypes.node.isRequired,
}

const SideBar = styled.aside`
  ${bpMinLG} {
    max-width: 25%;
    width: 100%;
  }
  ${bpMaxMD} {
    max-width: 35%;
    width: 100%;
  }
  ${bpMaxSM} {
    max-width: 100%;
    position: static;
    max-height: 100%;
  }
  max-height: 100vh;
  position: sticky;
  top: 0;
  font-size: 18px;
  background: #1f2933;
  ${bpMinLG} {
    ::after {
      content: '';
      position: absolute;
      z-index: 999;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 40px;
      background-image: linear-gradient(
        -180deg,
        rgba(31, 41, 51, 0) 0%,
        #1f2933 100%
      );
    }
  }
  * {
    transition: all 200ms ease;
    ul,
    li {
    }
    .active > li {
      background: #2f3f4f;
      :hover {
        background: #2f3f4f;
      }
    }
    li {
      :hover {
        transition: all 200ms ease;
        background: #283644;
      }
      border-radius: 5px;
      margin: 3px 15px 3px 15px;
      padding: 8px 15px;
    }
    a,
    h4 {
      //color: rgba(255, 255, 255, 0.9);
      color: #d3d7da;
      :hover {
        color: white;
      }
    }
    .active {
      color: #e4e7eb;
    }
    h4 {
      :hover {
        color: #ccd3ff;
      }
      color: #a5b3ff;
      padding: 0 15px;
      margin: 20px 15px 15px 15px;
      font-size: 16px;
      letter-spacing: 2px;
      line-height: 1.4;
      font-weight: lighter;
      text-transform: uppercase;
    }
    ::-webkit-scrollbar {
      width: 0px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #1f2933;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #616e7c;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
    }
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  //border-bottom: 1px solid #243b53;
  padding: 20px;
  max-width: inherit;
  width: 100%;
  img {
    width: 45px;
    height: auto;
    margin: 0;
    margin-right: 10px;
    ${bpMaxSM} {
      width: 30px;
    }
  }
  h1 {
    font-size: 20px;
    ${bpMaxSM} {
      font-size: 18px;
    }
    margin: 0;
    line-height: 1;
    color: white;
  }
`

export default LayoutReview
