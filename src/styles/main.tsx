import { Box, BoxProps, s } from '@bernatfortet/global-styles'
import styled, { css } from 'styled-components'

import c from './colors'
import * as t from './text'

export const spacing = {
  main: 16,
}

export const sizes = {
  contentWidth: 1140,
  leftColumn: 600,
  rightImage: 400,
}

export const Svg = styled.svg<BoxProps>` ${s.boxProps}`

export const Img = styled(Box).attrs(p => ({
  br: p.br || 4,
  style: p.cover ? { backgroundImage: `url(${p.src})`} : null,
  w: p.cover ? p.width : null,
  h: p.cover ? p.height : null,
  src: p.cover ? null : p.src,
  as: p.cover ? 'div' : 'img',
}))<BoxProps>`
  max-width:100%; ${s.boxProps}
  background-size: cover;
  background-repeat: no-repeat
`



export const ResponsiveRow = styled(Box)` ${s.flxRow} ${s.media.lg` ${s.flxCol}`} `

export const tBody = css` ${t.t19} ${t.workSans} line-height:1.5; color:${c.black80}; white-space: pre-line;`

export const Body = styled(t.Text)` ${tBody} `
export const Title = styled(t.T40)` ${t.brandon}  `
export const SubTitle = styled(t.T32)` ${t.brandon}  `
export const UnderlinedTitle = styled(t.T40)` ${t.brandon} line-height:14px; border-bottom:12px solid ${c.brand};  `


