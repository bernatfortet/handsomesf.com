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
  
  html{
    font-family: 'Work Sans', -apple-system, system-ui, BlinkMacSystemFont, "SF Pro Text", Roboto, Helvetica, Arial, sans-serif;
    background:white; color:#000; font-weight:400; 
    text-rendering:geometricPrecision; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing: grayscale;
    font-feature-settings:"kern" 1; font-kerning: normal;
    box-sizing: border-box;
  }
  html, body, #root, #root > div { width:100%; min-height:100%; height:100%; margin:0; padding:0; }
  body{ overflow: auto; overscroll-behavior-y: none; }
  a{ text-decoration:none; color:inherit;}
  *, *:before, *:after{ box-sizing: inherit; }
  svg{ box-sizing: content-box; }
  input{ outline:0; border:0; }
  h1, h2, h3, h4, h5, h6{
    margin: 0; padding:0; border:0; font-size:100%; font:inherit; font-weight:normal; font-style:normal; vertical-align: baseline;
  }
`

export const c = colors
