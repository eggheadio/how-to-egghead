import styled from "react-emotion"
import { cx, css } from "emotion"
import docs from "../reviewer-guide/docs"
import Link from "next/link"
import { Fragment } from "react"

const Color = {
  instructorPrimary: '#F16156',
  reviewerPrimary: '#E8A304',
  secondary: 'rgba(0,0,0,0.5)',
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

const DocsWrapper = styled("div")`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  h4:first-child {
    display: none;
    visibility: hidden;
  }
  h1 {
    font-weight: 300;
    font-size: 2.35rem;
    margin-bottom: 3.5rem;
    ${mq.medium(css`
    font-size: 3.5rem;
    `)};
    ${mq.large(css`
    font-size: 3rem;
    `)};
    color: ${Color.reviewerPrimary};
  }
  p > a {
    color: ${Color.reviewerPrimary};
   }
   a {
    color: ${Color.reviewerPrimary};
   }
   a:visited {
    color: ${Color.reviewerPrimary};
   }
`

const Divider = styled.hr`
opacity: 0.2;
 background: black;
 height: 1px;
 border: 0;
 width: 100%;
 margin-top: 2rem;
 margin-bottom: 1rem;
 ${mq.small(css` margin-top: 4rem; margin-bottom: 0; `)};
`

export default () => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      
    `}
  >

    {docs.map(({ chapter, title, slug }, index) => {

      return (
        <div 
        key={title}
        className={css`
        margin-top: -120px;
        padding-bottom: 6rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        `}
        >  
        <div
          className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 1.25rem;
          ${mq.small(css` padding: 0 2rem; `)};
          ${mq.large(css` padding: 0 4rem; `)};
        `}>

          <DocsWrapper>
          <h4>{title}</h4>
          </DocsWrapper>
          </div>
          
          {chapter.map(({ component, slug, title }) => {
            const Doc = component
            return (
              <article
                id={slug}
                key={slug}
                className={css`
                  margin-top: 2rem;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  padding: 0 1.5rem 0 1.5rem;
                  ${mq.small(css` padding: 0.5 2rem; margin-top: 0; `)};
                  ${mq.large(css` padding: 1.5rem 4rem; `)};
                `}
              >
                <DocsWrapper>
                  <span />
                  <Doc/>
                </DocsWrapper> 
               
                <Divider/>
               
              </article>
            )
          })}
         
        </div>
      )
    })}
  </div>
)
