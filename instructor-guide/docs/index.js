import WhatIsEgghead from "./00-What-is-egghead.md"
import chapter1 from "./01-Getting-started-as-an-egghead-instructor"
import chapter2 from "./02-Creating-lessons"
import chapter3 from "./03-Creating-Courses"
import chapter4 from "./04-Screencasting-tips"
import chapter5 from "./05-odds-and-ends"

export default [
  {
    title: "",
    chapter: [
      {
        component: WhatIsEgghead,
        title: "What is egghead",
        slug: "what-is-egghead"
      }
    ]
  },
  {
    title: "Getting Started as an egghead Instructor",
    chapter: chapter1
  },
  {
    title: "Creating Lessons",
    chapter: chapter2
  },
  {
    title: "Creating Courses",
    chapter: chapter3
  },
  {
    title: "Screencasting Tips",
    chapter: chapter4
  },
  {
    title: "Odds and Ends",
    chapter: chapter5
  }
]

// [
//   {
//     component: WhatIsEgghead,
//     title: "What is egghead",
//     slug: "what-is-egghead"
//   },
//   {
//     component: WhyBeAnInstructor,
//     title: "Why Be An Instructor?",
//     slug: "why-be-an-instructor"
//   }
// ]
