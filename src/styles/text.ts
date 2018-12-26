import * as React from 'react'

import { Box, BoxProps, s, TextProps } from '@bernatfortet/global-styles'
import styled, { createGlobalStyle, css, injectGlobal } from 'styled-components'

import c from './colors'

export const resetTextAttributes = css` font-family:inherit; font-size:inherit; line-height:inherit; font-weight:inherit; letter-spacing:inherit; `
export const merriweather = css` font-family: 'Merriweather', serif; `
export const workSans = css` font-family: 'Work Sans', sans-serif; `
export const brandon = css` font-family: 'Brandon Grotesque', sans-serif; `

export const tBold = css` font-weight:700; `
export const tMedium = css` font-weight:500; `
export const tRegular = css` font-weight:400; `
export const interFont = css` font-family:'Inter UI', sans-serif; `

export const t40 = css` font-size:40px; line-height:48px; ${tBold} `
export const t32 = css` font-size:32px; line-height:42px; ${tBold} `
export const t28 = css` font-size:28px; line-height:36px; ${tBold} `
export const t24 = css` font-size:24px; line-height:32px; ${tBold} `
export const t22 = css` font-size:22px; line-height:28px; ${tRegular} `
export const t20 = css` font-size:20px; line-height:24px; ${tRegular} `
export const t19 = css` font-size:19px; line-height:24px; ${tRegular} `
export const t18 = css` font-size:18px; line-height:22px; ${tRegular} `
export const t16 = css` font-size:16px; line-height:19px; ${tRegular} `
export const t15 = css` font-size:15px; line-height:16px; ${tRegular} `
export const t14 = css` font-size:14px; line-height:16px; ${tRegular} `
export const t13 = css` font-size:13px; line-height:15px; ${tRegular} `
export const t12 = css` font-size:12px; line-height:14px; ${tRegular} `
export const t10 = css` font-size:10px; line-height:12px; ${tRegular} `

export const globalTextStyles = css`
  html{
    ${interFont} ${t15} color:${c.black};
    font-kerning:normal;
    text-rendering:geometricPrecision;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a{ text-decoration: none; }

  @import url('https://fonts.googleapis.com/css?family=Work+Sans');

  @font-face {
      font-family: 'Brandon Grotesque';
      src: url(fonts/brandongrotesque-bold.eot);
      src: url(fonts/brandongrotesque-bold.eot?#iefix) format("embedded-opentype"),url(fonts/brandongrotesque-bold.woff) format("woff"),url(fonts/brandongrotesque-bold.ttf) format("truetype"),url(fonts/brandongrotesque-bold.svg#BrandonGrotesqueBold) format("svg");
      font-weight: 700;
      font-weight: 700;
      font-style: normal;
  }
  
`

type TextComponentProps = {
  // Typography
  size?: number,
  lh?: number,

  // Font weight
  weight?: number,
  bold?: boolean,
  medium?: boolean,
  regular?: boolean,

  brandon?: boolean,
  workSans?: boolean,


  // Other Styles
  color?: string,
  opacity?: number,
  op?: number,
  center?: boolean,
  right?: boolean,
  upcase?: boolean,
  italic?: boolean,
}

const textProps = css<TextComponentProps>`
  ${p => p.lh ? `line-height: ${p.lh}px;` : ''}
  ${p => p.opacity ? `opacity: ${p.opacity};` : ''}
  ${p => p.op ? `opacity: ${p.op};` : ''}
  ${p => p.color ? `color: ${p.color};` : ''}
  ${p => p.center ? `text-align: center;` : ''}
  ${p => p.right ? `text-align: right;` : ''}
  ${p => p.upcase ? `text-transform: uppercase;` : ''}
  ${p => p.italic ? `font-style: italic;` : ''}


  ${p => p.size && textStyles[p.size]}
  ${p => p.bold && tBold} 
  ${p => p.medium && tMedium} 
  ${p => p.regular && tRegular} 
  ${p => p.weight && `font-weight:${p.weight};`} 

  ${p => p.brandon && brandon} 
  ${p => p.workSans && workSans} 
`

export const T40 = styled(Box) <TextComponentProps>` ${t40} ${textProps}`
export const T32 = styled(Box) <TextComponentProps>` ${t32} ${textProps}`
export const T28 = styled(Box) <TextComponentProps>` ${t28} ${textProps}`
export const T24 = styled(Box) <TextComponentProps>` ${t24} ${textProps}`
export const T18 = styled(Box) <TextComponentProps>` ${t18} ${textProps}`
export const T20 = styled(Box) <TextComponentProps>` ${t20} ${textProps}`
export const T16 = styled(Box) <TextComponentProps>` ${t16} ${textProps}`
export const T15 = styled(Box) <TextComponentProps>` ${t15} ${textProps}`
export const T14 = styled(Box) <TextComponentProps>` ${t14} ${textProps}`
export const T13 = styled(Box) <TextComponentProps>` ${t13} ${textProps}`
export const T12 = styled(Box) <TextComponentProps>` ${t12} ${textProps}`
export const T10 = styled(Box) <TextComponentProps>` ${t10} ${textProps}`
export const BaseText = styled(Box)` ${textProps}`

export const textStyles = { 10: t10, 12: t12, 13: t13, 14: t14, 15: t15, 16: t16, 18: t18, 20: t20, 24: t24, 28: t28, 32: t32 }
export const textTags = { 10: T10, 12: T12, 13: T13, 14: T14, 15: T15, 16: T16, 18: T18, 20: T20, 24: T24, 28: T28, 32: T32 }

export const Text = styled(Box) <TextComponentProps>`
${s.boxProps}
${textProps}
`


