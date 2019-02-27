import React from "react"
import Link from "./link"
import { css } from "@emotion/core"
import MediaQuery from "react-responsive"
import "./layout-styles.css"
import logo from "../images/egghead-logo.svg"
import { bpMaxSM, bpMaxMD, bpMinLG } from "../utils/breakpoints"
import Toggle from "react-toggled"
import Search from "./search"

const Sidebar = () => (
  <aside css={sidebarStyles}>
    <div
      css={css`
        overflow-y: auto;
        height: 100%;
      `}
    >
      <div css={logoStyles}>
        <Link
          to="/"
          css={css`
            display: flex;
            align-items: center;
            width: 100%;
            color: inherit;
          `}
          aria-label="Scroll to top"
        >
          <img src={logo} alt="How to egghead" />
          <h1>How to egghead</h1>
        </Link>
      </div>

      <MediaQuery minWidth={768}>
        <>
          <Search />
          {/* <ul css={css`list-style: none;`}>
                  {get(data, 'allMdx.edges', []).map(({ node: data }) => (
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
                </ul> */}
        </>
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <Toggle>
          {({ on, getTogglerProps }) => (
            <>
              <div
                aria-label={`${on ? "close menu" : "open menu"}`}
                css={menuButtonStyles}
                {...getTogglerProps()}
              >
                Menu
              </div>
              {on ? (
                <div>
                  <Search />
                  {/* {get(data, 'allMdx.edges', []).map(({ node: data }) => (
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
                      ))} */}
                  <MediaQuery maxWidth={767}>
                    <div
                      css={css`
                        ${buttonStyles}
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
                          content: "⟶";
                          color: white;
                          margin-left: 15px;
                          position: absolute;
                        }
                      `}
                    >
                      <Link to="/review" aria-label="Go to reviewer guide">
                        Reviewer guide
                      </Link>
                    </div>
                  </MediaQuery>
                </div>
              ) : null}

              <ul
                css={css`
                  display: ${on ? "block" : "none"};
                `}
              />
            </>
          )}
        </Toggle>
      </MediaQuery>
    </div>
  </aside>
)

const sidebarStyles = css`
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
    width: 100%;
    position: static;
    height: auto;
  }
  height: 100vh;
  position: sticky;
  top: 0;
  font-size: 18px;
  background: #1f2933;
  ${bpMinLG} {
    ::after {
      content: "";
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
  .active {
    color: #e4e7eb;
    h5 {
      background: #283644;
    }
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
  transition: all 200ms ease;
  * {
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

const logoStyles = css`
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

const menuButtonStyles = css`
  position: absolute;
  top: 27px;
  line-height: 1;
  outline: none;
  right: 20px;
  cursor: pointer;
  color: white;
  border: none;
`

const buttonStyles = css`
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

export default Sidebar
