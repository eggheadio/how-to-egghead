import { Component } from "react"
import styled, { hydrate, injectGlobal } from "react-emotion"
import { css } from "emotion"
import { loadGetInitialProps } from "next/dist/lib/utils"
import Head from "next/head"
import codeStyles from "../components/CodeStyles"
import GlobalStyles from "../components/GlobalStyles"
import Eggo from "../components/Eggo"
import Link from 'next/link'

let ReactGA
if (process.browser) {
  ReactGA = require("react-ga") // eslint-disable-line global-require
}

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids)
}

const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  tallPhone: '(max-width: 360px) and (min-height: 740px)'
}

const mq = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    let prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:'
    let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
    accumulator[label] = cls =>
      css`
        @media (${prefix + breakpoints[label] + suffix}) {
          ${cls};
        }
      `
    return accumulator
  },
  {}
)

const Color = {
  instructorPrimary: '#F16156',
  reviewerPrimary: '#E8A304',
  secondary: 'rgba(0,0,0,0.5)',
}


injectGlobal`
${globalStyles}
${codeStyles}
`

const LinkBlock = styled.a`
${mq.medium(css`
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  margin-top: 0;
`)}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
cursor: pointer;
height: 40vh;
margin-top: 2rem;
background-color: #white;
border: 0px solid transparent;
box-sizing: border-box;
h1 {
  transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  margin-top: 1.5rem;
  opacity: 0.7
  ${mq.medium(css`
  font-size: 2rem;
  margin-top: 3rem;
`)}
  font-size: 1.5rem;
}
img {
${mq.medium(css`
  max-width: 60%;
`)}
max-width: 75%;
}
&:first-child:hover {
  img {
    transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  h1 {
    transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    opacity:1;
  }
  background-color: #E6F5FF;
  
}
&:last-child:hover {
  img {
    
    transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  h1 {
    transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    opacity:1;
  }
  background-color: #FAF3D4;
  
}
`

class App extends Component {
  constructor(props) {
    super(props)
    if (process.browser) {
      ReactGA.initialize("UA-36512724-5")
    }
    this.state = {isToggleOn: true}
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
    this.hide = this.hide.bind(this)
  }

  componentDidMount() {
    const page = window.location.pathname
    ReactGA.set({ page })
    ReactGA.pageview(page)
    
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  hide() {
      this.setState(prevState => ({
          isToggleOn: true
        }));
  }

  render() {
    return (
      <div>
        <Head>
          <title>How to egghead — Instructor 101 Guide</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="google-site-verification"
            content="IIrF63zU-1tJ9wTakA176fZd_hNrbW1QD_5oticuUv0"
          />
          <meta name="description" content="Learn how to egghead like a pro." />

          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:image" content="/static/og-image.jpg" />
          <meta property="og:image:width" content="279" />
          <meta property="og:image:height" content="279" />
          <meta
            property="og:title"
            content="Learn how to egghead like a pro."
          />
          <meta
            property="og:description"
            content="Instructor 101 Guide"
          />
          <meta
            property="og:url"
            content="https://learnreduxwithdanabramov.com/"
          />
        </Head>
      <main className={css`
      display: flex;
      ${mq.medium(css`
        flex-direction: row;
        min-height: 100vh;
        width: 100vw;
        max-width: 100%;
        justify-content: space-between;
        align-items: center;
      `)}
      flex-direction: column;
      min-height: 200px;
      width: 100vw;
      max-width: 100%;
      justify-content: space-between;
      align-items: center;
    
      `}>
      <Link href="./">
      <LinkBlock>
        <img src="../static/eggoInstructor.png" alt="Instructor Guide" />
        <h1>Instructor Guide</h1>
        </LinkBlock>
      </Link>
      <Link href="/reviewers">
      <LinkBlock>
      <img src="../static/eggoReviewer.png" alt="Instructor Guide" />
       <h1>Reviewer Guide</h1>
      </LinkBlock>
      </Link>
       </main>
      </div>
    )
  }
}

export default App
