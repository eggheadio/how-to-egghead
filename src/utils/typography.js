import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

bootstrapTheme.baseFontSize = '20px'
bootstrapTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  p: {
    fontWeight: 'medium',
  },
})

const typography = new Typography(bootstrapTheme)
export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
