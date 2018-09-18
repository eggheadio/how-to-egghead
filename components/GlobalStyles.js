import { css } from "emotion"
import {mq} from "./Breakpoints"
import { Color } from "./Colors"

export default `
    html, body {
        margin: 0;
        padding: 0;
        background: white;
        font-family: 'nimbus-sans', Helvetica, Arial, sans-serif;
        ${mq.medium(css`
        font-size: 1.125rem;
        line-height: 1.625rem;
        `)};
        ${mq.large(css`
        font-size: 1.08rem;
        line-height: 1.625rem;
        `)};
        font-size: 1rem;
        line-height: 1.43rem;
        color: hsl(0, 0%, 10%);
        font-weight: 400;
      }
      h1, h2, h3, h4 {
        font-family: 'nimbus-sans', Helvetica, Arial, sans-serif;
        color: hsl(0, 0%, 0%);
        font-weight: 300;
      }
      h1 {
        font-size: 2rem;
        ${mq.medium(css`
        font-size: 3rem;
        line-height: 3rem;
        padding-bottom: 1rem;
        `)};
      }
      h2 {
        font-size: 1.75rem;
        margin: 4rem 0 1rem 0;
        ${mq.medium(css`
        font-size: 2.5rem;
        margin: 2rem 0 1rem 0;
        line-height: 3.35rem;
        `)};
        line-height: 2rem;
        font-weight: 500;
        position: relative;
        z-index: 999;
        }
      h3 {
        font-size: 1.5rem;
        margin: 2.5rem 0 1rem 0;
        ${mq.medium(css` 
        font-size: 1.75rem; 
        margin: 4.5rem 0 1rem 0;
        `)};
        line-height: 1.5rem;
        font-weight: 500;
        color: rgba(0,0,0,0.85);
      }
      h4 {
        font-size: 1.2rem;
        text-transform: uppercase;
        margin: 6.5rem 0 1rem 0;
        letter-spacing: 3px;
      }
      img {
        max-width: 98%;
        height: auto;
        padding: 1rem 0;
        ${mq.medium(css` 
        padding: 1.5rem 0;
        `)};
      }
      pre {
        background: #fafafa;
        padding: 25px;
        overflow-wrap: break-word;
        word-break: break-all;
        overflow-x: auto;
        ${mq.medium(css` 
        max-width: 800px;
        `)};
      }
      pre > code {
        overflow-wrap: break-word;
        word-break: break-all;
        max-width: 800px;
      }
      strong {
        font-weight: 600;
      }
      
      p {
      font-weight: 200;
      color: rgba(0,0,0,0.95);
      }
      
      p > a {
      overflow-wrap: break-word;
      word-break: break-all;
      -ms-hyphens: auto;
      -moz-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;
      }
      a {
      text-decoration: none;
      transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
      :hover {
        text-decoration: none;
        text-decoration-color: inherit;
        transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
      }
      }
      p > code {
      word-break: break-all;
      }
      ul > li {
      font-weight: 200;
      color: rgba(0,0,0,0.85);
      margin-left: 1.2rem;
      ${mq.medium(css`
      padding: 0.4rem 0;
      `)}
      padding: 0.3rem 0;
      }
      strong {
       font-weight: 500;
      }
      blockquote {
      color: rgba(0,0,0,0.85);
      font-style: italic;
      margin: 0;
      padding: 0 0 0 1rem;
      display: block;
      border-left: 2px solid rgba(0,0,0,0.1);
      }
      ul {
      padding: 0;
      /* list-style: none; */
      }
      ol {
      margin-left: 0;
      list-style-type: decimal;
      }
      ol, ol li {
      margin-left: 0;
      padding-left: 0;
      padding: 0.3rem 0;
      }
      ol {
      margin-left: 1.2rem;
      }
      /*  li::before {
      content: '• ';
      color: rgba(0,0,0,0.75);
      margin-right: 0.35rem;
      }  */
`