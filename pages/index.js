import { Component } from "react"
import styled, { hydrate, injectGlobal } from "react-emotion"
import { css } from "emotion"
import { loadGetInitialProps } from "next/dist/lib/utils"
import Head from "next/head"
import GlobalStyles from "../components/GlobalStyles"
import { Color } from "../components/Colors"
import codeStyles from "../components/CodeStyles"
import { mq } from "../components/Breakpoints"
import Link from 'next/link'

let ReactGA
if (process.browser) {
  ReactGA = require("react-ga") // eslint-disable-line global-require
}

if (typeof window !== "undefined") {
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
      ReactGA.initialize("UA-36512724-5")
    }
    this.state = {isToggleOn: true, isDesktop: false}
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
    window.addEventListener("resize", this.updatePredicate)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate)
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
          <title>How to egghead</title>
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
            content="https://howtoegghead.com/"
          />
        </Head>
        <Main>
      <div className={`${css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      `}`}>
        <Link href="/instructors">
          <LinkBlock>
            <img src="../static/eggoInstructor.png" alt="Instructor Guide" />
            <h1>Instructor Guide</h1>
          </LinkBlock>
        </Link>
      </div>
      <div>
        <Link href="/reviewers">
          <LinkBlock>
            <img src="../static/eggoReviewer.png" alt="Instructor Guide" />
            <h1>Reviewer Guide</h1>
          </LinkBlock>
        </Link>
      </div>
       </Main>
      </div>
    )
  }
}

export default App

const Main = styled.main`
display: flex;
${mq.medium(css`
    flex-direction: row;
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
    justify-content: center;
    align-items: center;
  `)}
  flex-direction: column;
  min-height: 200px;
  width: 100vw;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
`

const LinkBlock = styled.div`
${mq.medium(css`
  width: 400px;
  min-height: 500px;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  margin: 2.5rem;
  border: 1px solid rgba(0,0,0, 0.1);
`)}
min-height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: auto;
cursor: pointer;
height: 40vh;
margin-top: 2rem;
background-color: #white;
border: 0px solid transparent;
box-sizing: border-box;
h1 {
  opacity: 0.7
  ${mq.medium(css`
  font-size: 2rem;
  margin-top: 3rem;
`)}
  font-size: 2rem;
}
img {
${mq.medium(css`
  max-width: 100%;
`)}
max-width: 75%;
}
&:hover {
  background-color: #fafafa;
}
`
