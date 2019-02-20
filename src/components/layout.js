import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Link from './link'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import reset from '../utils/reset'
import SEO from './seo'
import './layout.css'
import logo from '../images/egghead-logo.svg'
import { bpMaxSM, bpMaxMD, bpMinLG } from '../utils/breakpoints'
import Toggle from 'react-toggled'

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
          sort: { order: ASC, fields: [frontmatter___chapter] }
          filter: { fileAbsolutePath: { regex: "//instructorguide/" } }
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
          <Link to='/review' aria-label='Go to reviewer guide'>
            <Button
              css={css`
                ${bpMaxSM} {
                  display: none;
                }
              `}>
              Reviewer guide
            </Button>
          </Link>
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
                  <h1>How to egghead</h1>
                </Link>
              </Logo>
              <div
                css={css`
                  ${bpMaxSM} {
                    display: none;
                  }
                `}>
                <ul
                  css={css`
                    list-style: none;
                  `}>
                  {data.allMdx.edges.map(({ node: data }) => (
                    <span key={data.id}>
                      {data.frontmatter.chapterTitle && (
                        <Link to={`/${data.frontmatter.slug}`}>
                          <h4>{data.frontmatter.chapterTitle}</h4>
                        </Link>
                      )}
                      <Link
                        to={`/${data.frontmatter.slug}`}
                        activeClassName='active'>
                        <li>{data.frontmatter.title}</li>
                      </Link>
                    </span>
                  ))}
                </ul>
              </div>
              <Toggle>
                {({ on, getTogglerProps }) => (
                  <div
                    css={css`
                      ${bpMaxSM} {
                        display: block;
                      }
                      display: none;
                    `}>
                    <MenuButton
                      aria-label={`${on ? 'close menu' : 'open menu'}`}
                      {...getTogglerProps()}>
                      Menu
                    </MenuButton>

                    <ul
                      css={css`
                        list-style: none;
                        display: ${on ? 'block' : 'none'};
                      `}>
                      {data.allMdx.edges.map(({ node: data }) => (
                        <span key={data.id}>
                          {data.frontmatter.chapterTitle && (
                            <Link to={`/${data.frontmatter.slug}`}>
                              <h4>{data.frontmatter.chapterTitle}</h4>
                            </Link>
                          )}

                          <Link
                            to={`/${data.frontmatter.slug}`}
                            activeClassName='active'>
                            <li>{data.frontmatter.title}</li>
                          </Link>
                        </span>
                      ))}
                      <Button
                        css={css`
                          ${bpMaxSM} {
                            margin-left: 30px;
                            margin-bottom: 30px;
                            display: block;
                            position: relative;
                            background: #1f2933;
                            font-size: 18px;
                            :hover {
                              background: #323f4b;
                            }
                            ::after {
                              content: '⟶';
                              color: white;
                              margin-left: 15px;
                              position: absolute;
                            }
                          }
                          display: none;
                        `}>
                        <Link to='/review' aria-label='Go to reviewer guide'>
                          Reviewer guide
                        </Link>
                      </Button>
                    </ul>
                  </div>
                )}
              </Toggle>
            </div>
          </SideBar>
          <Main>{children}</Main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const MenuButton = styled.div`
  position: absolute;
  top: 27px;
  line-height: 1;
  outline: none;
  right: 20px;
  cursor: pointer;
  color: white;
  border: none;
`

const SideBar = styled.aside`
  ${bpMinLG} {
    max-width: 25%;
  }
  ${bpMaxMD} {
    max-width: 35%;
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
      margin: 30px 15px 10px 15px;
      font-size: 16px;
      letter-spacing: 2px;
      line-height: 1.4;
      font-weight: normal;
      text-transform: uppercase;
    }
    ::-webkit-scrollbar {
      width: 0px;
    }
    ::-webkit-scrollbar-track {
      background: #1f2933;
    }
    ::-webkit-scrollbar-thumb {
      background: #616e7c;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
    }
  }
`

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

const Logo = styled.div`
  display: flex;
  align-items: center;
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

export default Layout
