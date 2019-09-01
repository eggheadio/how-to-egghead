import Typography from 'tyjs' // a fork of Kyle's typography.js with added support for breakpoints. (https://cl.ly/1cb2b98c2293)
import eggheadTheme from './typographyTheme'

eggheadTheme.overrideThemeStyles = ({rhythm}, options) => ({
  'ul, li': {
    listStylePosition: 'inside',
  },
})

const typography = new Typography(eggheadTheme)
export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
