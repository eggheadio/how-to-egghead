import { Component } from "react"
import styled, { hydrate, injectGlobal } from "react-emotion"
import { css } from "emotion"
import { loadGetInitialProps } from "next/dist/lib/utils"
import Head from "next/head"
import Docs from "../components/InstructorGuide"
import codeStyles from "../components/CodeStyles"
import Eggo from "../components/Eggo"

let ReactGA
if (process.browser) {
  ReactGA = require("react-ga") // eslint-disable-line global-require
}

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
  html, body {
    padding: 3rem 1rem;
    margin: 0;
    background: white;
    min-height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
  }
  img {
    max-width: 100%;
  }
  pre {
    background: #fafafa;
    padding: 25px;
  }
  ${codeStyles}
`

class App extends Component {
  constructor(props) {
    super(props)
    if (process.browser) {
      ReactGA.initialize("UA-36512724-5")
    }
  }

  componentDidMount() {
    const page = window.location.pathname
    ReactGA.set({ page })
    ReactGA.pageview(page)
  }

  render() {
    return (
      <div>
        <Head>
          <title>Learn Redux with Dan Abramov</title>
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
          <meta
            name="description"
            content="Learn how to use Redux in your React apps in the tutorial from the creator of Redux, Dan Abramov."
          />

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
            content="Learn Redux for React with Dan Abramov"
          />
          <meta
            property="og:description"
            content="Learn how to use Redux in your React apps in the tutorial from the creator of Redux, Dan Abramov."
          />
          <meta
            property="og:url"
            content="https://learnreduxwithdanabramov.com/"
          />
        </Head>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <Docs />
        </div>
      </div>
    )
  }
}

export default App
