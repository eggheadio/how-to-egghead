import styled from "react-emotion"
import { cx, css } from "emotion"
import instructorDocs from "../instructor-guide/docs"
import reviewerDocs from "../reviewer-guide/docs"
import Link from "next/link"
import { Fragment } from "react"
import Scrollspy from 'react-scrollspy'

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



const Anchor = styled.span`
  text-decoration: none;
  color: rgba(0,0,0,0.55);
  cursor: pointer;
  transition: all 250ms ease;
  &:hover {
    color: rgba(0,0,0,1);
    transition: all 250ms ease;
  }
`

const ChapterAnchor = styled(Anchor)`
  font-size: 0.85rem;
  padding-top: 1rem;
  text-transform: uppercase;
  opacity: 0.7;
`

const Color = {
    instructorPrimary: '#F16156',
    reviewerPrimary: '#E8A304',
    secondary: '',
  }  

export default ({Instructor = false}) => (
    <nav className={css`
    position: fixed;
    overflow-y: scroll;
    padding: 2rem;
    transition: all 250ms ease;
    margin-left: 0;
    background-color: white;
    box-shadow: 0 10px 50px -10px rgba(0,0,0,0.15);
    ${mq.large(css` 
    position: fixed;
    top: 0;
    height: 100vh;
    padding: 2rem 2rem;
    overflow-y: scroll;
    height: inherit;
    background-color: #fafafa;
    width: auto;
    box-shadow: none;
    `)};

   
    ::-webkit-scrollbar {
        width: 0px;
    }
    ::-webkit-scrollbar-track {
        background-color: #fafafa;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #f1f1f1;
    }
    `}>
    <div
      
    >
    {Instructor ? (
      <div className={css`
      display: flex;
      flex-direction: column;
      left: 0;
      top: 0;
      height: 100vh;
      width: 230px;
      h4 {
          margin: 0;
      }
      a {
          font-size: 0.85rem;
          text-decoration: none;
      }
      & > :last-child {
          padding-bottom: 6rem;
          ${mq.medium(css` 
          padding-bottom: 6rem;
          `)};
      }
      & > :first-child {
          margin-top: 0;
          padding: 0;
      }
      & > :nth-child(3) {
          margin-top: 0;
          padding: 0;
      }
      & > :nth-child(2) {
          display: none; visibility: hidden;
          
      )}
      
    `}>
        {instructorDocs.map(({ chapter, title: chapterTitle, slug: chapterSlug }, index) =>
        chapter.map(({ title, slug }, index) => (
          <Fragment key={title}>
            {index === 0 ? (
              <Link href={`#${chapterSlug}`}>
                <ChapterAnchor>{chapterTitle}</ChapterAnchor>
              </Link>
            ) : null}
            <a href={`#${slug}`}>
            <Scrollspy 
              offset={0} 
              items={[`${slug}`]} 
              className={css`
                padding: 0; margin: 0; transition: all 250ms ease;
              `} 
              currentClassName={css`
                color: rgba(0,0,0,0.9);
                transition: all 250ms ease;
                opacity: 1;
                ::before {
                  content: '';
                  position: absolute;
                  width: 10px;
                  height: 3px;
                  margin-top: 12px;
                  left: 0;
                  background-color: ${Instructor ? `${Color.instructorPrimary}` : `${Color.reviewerPrimary}`};
                }
              `}
              scrolledPastClassName={css`
                color: yellow;
            `}>
              <Anchor>{title}</Anchor>
              </Scrollspy>
            </a>
            
          </Fragment>
          
        ))
      )}
        </div>
    ) : (
    <div className={css`
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0;
    height: 100vh;
    width: 230px;
    h4 {
        margin: 0;
    }
    a {
        font-size: 0.85rem;
        text-decoration: none;
    }
    & > :last-child {
        margin-bottom: 6rem;
        ${mq.medium(css` 
        margin-bottom: 6rem;
        `)};
    }
    & > :first-child {
        margin-top: 0;
        padding: 0;
    }
    & > :nth-child(3) {
        margin-top: 0;
        padding: 0;
    }
    & > :nth-child(2) {
        display: none; 
        visibility: hidden;
    )}
    
  `}>
        {reviewerDocs.map(({ chapter, title: chapterTitle, slug: chapterSlug }, index) =>
        chapter.map(({ title, slug }, index) => (
          <Fragment key={title}>
            {index === 0 ? (
              <Link href={`#${chapterSlug}`}>
                <ChapterAnchor>{chapterTitle}</ChapterAnchor>
              </Link>
            ) : null}
            <a href={`#${slug}`}>
            <Scrollspy 
              offset={0} 
              items={[`${slug}`]} 
              className={css`
                padding: 0; margin: 0; transition: all 250ms ease;
              `} 
              currentClassName={css`
                color: rgba(0,0,0,0.9);
                transition: all 250ms ease;
                opacity: 1;
                ::before {
                  content: '';
                  position: absolute;
                  width: 10px;
                  height: 3px;
                  margin-top: 12px;
                  left: 0;
                  background-color: ${Instructor ? `${Color.instructorPrimary}` : `${Color.reviewerPrimary}`};
                }
              `}
              scrolledPastClassName={css`
                color: yellow;
            `}>
              <Anchor>{title}</Anchor>
              </Scrollspy>
            </a>
            
          </Fragment>
          
        ))
      )}
        </div>
    )}

    
      </div>
      </nav>
      )