import Introduction from "./00-Introduction.md"
import chapter1 from "./01-Review"
import chapter2 from "./02-Update-Code"

export default [
  {
    title: "",
    slug: "",
    background: 'white',
    color: 'black',
    chapter: [
      {
        component: Introduction,
        title: "Introduction",
        slug: "introduction",
      }
    ]
  },
  {
    title: "Review",
    slug: "review",
    chapter: chapter1,
    background: 'white',
    color: 'black'
  },
  {
    title: "Update Code",
    slug: "update-code",
    chapter: chapter2,
    background: 'white',
    color: 'black'
  }, 
]
