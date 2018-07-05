import styled from "react-emotion"
import { css } from "emotion"
import docs from "../instructor-guide/docs"
import Link from "next/link"
import { Fragment } from "react"

const DocsWrapper = styled("div")`
  flex: 1 1;
  max-width: 800px;
`

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const ChapterAnchor = styled(Anchor)`
  padding-top: 1rem;
  text-transform: uppercase;
`

const Divider = styled.hr`
  margin: 2rem;
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
    <h4>Table of Contents</h4>
    {docs.map(({ chapter, title: chapterTitle, slug: chapterSlug }, index) =>
      chapter.map(({ title, slug }, index) => (
        <Fragment key={title}>
          {index === 0 ? (
            <Link href={`#${chapterSlug}`}>
              <ChapterAnchor>{chapterTitle}</ChapterAnchor>
            </Link>
          ) : null}
          <Link href={`#${slug}`}>
            <Anchor>{title}</Anchor>
          </Link>
        </Fragment>
      ))
    )}

    {docs.map(({ chapter, title, slug }, index) => {
      return (
        <div key={title}>
          <Divider />
          <h2 id={slug}>{title}</h2>
          {chapter.map(({ component, slug, title }) => {
            const Doc = component
            return (
              <article
                key={slug}
                className={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <DocsWrapper>
                  <span id={slug} />
                  <Doc />
                </DocsWrapper>
              </article>
            )
          })}
        </div>
      )
    })}
  </div>
)
