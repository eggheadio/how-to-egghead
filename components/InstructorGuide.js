import styled from "react-emotion"
import { css } from "emotion"
import docs from "../instructor-guide/docs"

const DocsWrapper = styled("div")`
  flex: 1 1;
  max-width: 800px;
`

export default () => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 50px;
    `}
  >
    {docs.map(({ chapter, title }, index) => {
      return (
        <div key={title}>
          <hr />
          <h2>{title}</h2>
          {chapter.map(doc => {
            const Doc = doc.component
            return (
              <article
                key={doc.slug}
                className={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  padding-top: 50px;
                `}
              >
                <DocsWrapper>
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
