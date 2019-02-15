import { Component } from 'react'
import styled, { hydrate, injectGlobal } from 'react-emotion'
import { css } from 'emotion'
import Head from 'next/head'
import Docs from '../components/ReviewersGuide'
import GlobalStyles from '../components/GlobalStyles'
import { Color } from '../components/Colors'
import codeStyles from '../components/CodeStyles'
import ToC from '../components/ToC'
import { mq } from '../components/Breakpoints'

let ReactGA
if (process.browser) {
  ReactGA = require('react-ga') // eslint-disable-line global-require
}

if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
${GlobalStyles}
${codeStyles}
`
class App extends Component {
  constructor(props) {
    super(props)
    if (process.browser) {
      ReactGA.initialize('UA-36512724-5')
    }
    this.state = { isToggleOn: true, isDesktop: false }
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
    this.hide = this.hide.bind(this)
    this.updatePredicate = this.updatePredicate.bind(this)
  }

  componentDidMount() {
    const page = window.location.pathname
    ReactGA.set({ page })
    ReactGA.pageview(page)
    this.updatePredicate()
    window.addEventListener('resize', this.updatePredicate)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate)
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 768 })
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  hide() {
    this.setState(prevState => ({
      isToggleOn: true
    }))
  }

  render() {
    const isDesktop = this.state.isDesktop
    return (
      <div>
        <Head>
          <title>How to egghead — Content Reviewers Guide</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="google-site-verification" content="IIrF63zU-1tJ9wTakA176fZd_hNrbW1QD_5oticuUv0" />
          <meta name="description" content="Learn how to egghead like a pro." />

          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="/static/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:image" content="/static/og-image.jpg" />
          <meta property="og:image:width" content="279" />
          <meta property="og:image:height" content="279" />
          <meta property="og:title" content="Learn how to egghead like a pro." />
          <meta property="og:description" content="Reviewers Guide" />
          <meta property="og:url" content="https://learnreduxwithdanabramov.com/" />
        </Head>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            ${mq.large(css`
              flex-direction: row;
            `)};
          `}
        >
          <aside
            className={css`
              z-index: 9999;
            `}
          >
            <div
              className={css`
                z-index: 1000;
                transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
              `}
            >
              <div
                className={css`
                  z-index: 1000;
                  transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
                  ${this.state.isToggleOn
                    ? `
              position: absolute;
              left: -320px;
              `
                    : `
              position: absolute;
              left: 0px;
              `};
                `}
              >
                <ToC instructor={false} expanded={this.state.isToggleOn && true} />
              </div>
            </div>
            <button
              onClick={this.handleClick}
              className={css`
             ${mq.large(css`
               background-color: white;
             `)};
              background-color: white;
              :hover {
                background-color: #F0F0F0;
              }
              cursor: pointer;
              position: fixed;
              z-index: 1000;
              width: 40px;
              height: 40px;
              display: flex;
              padding-top: 3px;
              justify-content: center;  
              align-items: center;
              background: white;
              border: 0;
              left: 0;
              outline: transparent;
              transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
              margin-top: 1rem;
              ${mq.medium(css`
                ${this.state.isToggleOn ? `margin-left: 1rem;` : `margin-left: 280px;`};
              `)}
              ${this.state.isToggleOn ? `margin-left: 1rem;` : `margin-left: 230px;`}
              ${
                this.state.isToggleOn
                  ? `
                border: 1px solid #eee;
                ::before {
                  content: '';
                  position: absolute;
                  width: 20px;
                  height: 1px;
                  margin-top: -5px;
                  background: #747474;
                  transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
                }
                ::after {
                  content: '';
                  position: absolute;
                  width: 20px;
                  height: 1px;
                  margin-top: 5px;
                  background: #747474;
                  transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
                }
                `
                  : `
                border: 1px solid #fafafa;
                ::before {
                  content: '';
                  position: absolute;
                  width: 15px;
                  height: 1px;
                 
                  background: #747474;
                  transform: rotate(-180deg);
                  transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
                }
                ::after {
                  content: '';
                  position: absolute;
                  width: 15px;
                  height: 1px;
                  
                  background: #747474;
                  transform: rotate(180deg);
                  transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
                }
                `
              }
              `}
            />
          </aside>
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
              ${mq.large(css`
                ${this.state.isToggleOn ? `width: 100vw;` : `width: 100vw;`};
              `)};
            `}
          >
            <div>
              <header
                className={css`
                  h1 {
                    color: ${Color.reviewerPrimary};
                    font-weight: 500;
                  }
                  white-space: nowrap;
                  ${mq.medium(css`
                    padding: 3rem 2rem;
                    flex-direction: column;
                    text-align: center;
                    margin-bottom: 5rem;
                  `)};
                  ${mq.large(css`
                    padding: 5rem 3rem;
                    margin-bottom: 5rem;
                    flex-direction: row;
                    justify-content: space-between;
                    text-align: left;
                  `)};
                  margin-bottom: 3rem;
                  text-align: center;
                  display: flex;
                  padding: 6rem 0 3rem 0;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  position: relative;
                  z-index: 999;
                `}
              >
                <div>
                  <h1
                    className={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    egghead Reviewers Guide
                  </h1>
                </div>
                <img
                  src="/static/eggoReviewer.png"
                  alt="How to egghead - 101 Instructor Guide"
                  className={css`
                    ${mq.medium(css`
                      max-width: 45%;
                    `)};
                    max-width: 70%;
                    height: auto;
                  `}
                />
              </header>
              <Docs />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
