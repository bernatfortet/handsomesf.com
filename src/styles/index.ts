import { createGlobalStyle } from 'styled-components'

import colors from './colors'
import * as mainStyles from './main'
import * as text from './text'

export { BoxProps, TextProps, Box, Column, Row, s } from '@bernatfortet/global-styles'

export const m = {
  ...mainStyles,
  ...text,
}


// Global
export const GlobalStyles = createGlobalStyle`
  ${text.globalTextStyles}
`

export const c = colors
