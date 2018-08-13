import { Component } from "react"
import { css } from "emotion"

const breakpoints = {
    small: 576,
    medium: 768,
    large: 992,
    xLarge: 1200,
    tallPhone: '(max-width: 360px) and (min-height: 740px)'
  }
  
  export const mq = Object.keys(breakpoints).reduce(
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