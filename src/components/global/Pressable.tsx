import { darken, transparentize } from 'polished'

import { Box, BoxProps, s } from '@bernatfortet/global-styles'
import styled, { css } from 'styled-components'

import c from 'styles/colors'

type PressableProps = {
  color?: string,
  hoverColor?: string,
  hoverBg?: string,
  activeColor?: string,
  activeBg?: string,
  isActive?: boolean,
} & BoxProps

export const RootPressable = styled(Box).attrs<PressableProps>({
  color: p => p.color || p.theme.pressable && p.theme.pressable.color || c.black,
  background: p => p.background || p.theme.pressable && p.theme.pressable.background || 'transparent',
  hoverColor: p => p.hoverColor || p.theme.pressable && p.theme.pressable.hoverColor || c.black,
  hoverBg: p => p.hoverBg || p.theme.pressable && p.theme.pressable.hoverBg || c.black10,
})`
  ${s.unselectable} ${s.anchor} transition: all 200ms;
  color:${p => p.color};
  & svg { fill:${p => p.color};  }
  &:hover svg{ fill:${p => p.hoverColor};  }
  &:hover{ color:${p => p.hoverColor};   background:${p => p.hoverBg}; transition: all 50ms; }
  ${p => p.isActive && ` color:${p.activeColor || p.hoverColor}; background:${p.activeBg || p.hoverBg}; `}
`

RootPressable.defaultProps = {
  br: 4,
  p: 4,
}

type PressableTheme = {
  color: string,
  background: string,
  hoverColor: string,
  hoverBg: string,
}
export const pressableOnBlackTheme: PressableTheme = {
  color: c.white50,
  background: 'transparent',
  hoverColor: c.white,
  hoverBg: c.white10,

}
export const pressableOnWhiteTheme: PressableTheme = {
  color: c.black50,
  background: 'transparent',
  hoverColor: c.black,
  hoverBg: c.black10,
}


export const PressableOnBlack = styled(RootPressable).attrs<PressableProps>({ ...pressableOnBlackTheme })``
export const PressableOnWhite = styled(RootPressable).attrs<PressableProps>({ ...pressableOnWhiteTheme })``

export const PressableBlue = styled(RootPressable).attrs<PressableProps>({
  color: c.blue,
  hoverColor: darken(0.8, c.blue),
  hoverBg: transparentize(0.8, c.blue),
})``

export default RootPressable
