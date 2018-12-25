import { darken, getLuminance, lighten, readableColor, transparentize } from 'polished'
import * as React from 'react'

import styled, { css } from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles'

import Icon from 'components/global/Icon'

export type Props = {
  bg?: string,
  color?: string,
  hoverBg?: string,
  hoverColor?: string,

  iconName?: string,
  useRightIcon?: boolean,
  disabled?: boolean,
  withShadow?: boolean,

  id?: string,
  name?: string,
  title?: string,
  value?: string,
  type?: string,

  children?: any,
  className?: string,
  style?: any,


  onClick?: React.MouseEventHandler<any>,
  onMouseDown?: React.MouseEventHandler<any>,
} & BoxProps

// Butons --------
export const buttonPadding = css<Props>` padding:${p => p.pv || 16}px ${p => p.ph || 18}px; `
export const buttonText = css` ${m.t16} ${m.tBold} `
export const buttonRounding = 4

export const baseButton = css` ${s.flxRow} ${s.aic} ${s.jcc} ${s.tac} ${buttonPadding} ${s.anchor} ${s.unselectable}
  border:0; border-radius:${buttonRounding}px; outline:0;
  transition:all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover{ transition:all 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94) }
  &:focus{ box-shadow:0 0 0 4px rgba(0,147,255,0.4); }
`
export const buttonWithTranslation = css` transform: translateY(0px);
  &:hover{ transform: translateY(-1px); }
  &:active{ transform: translateY(0px); transition:transform 0ms linear; }
`
export const buttonWithShadow = css` transition: all 400ms ease;
  &:hover{ box-shadow: 0 1px 5px 0 ${c.black10}, 0 3px 16px 0 ${c.black10}; transition: all 150ms ease; }
  &:active{ box-shadow: 0 1px 1px 0 ${c.black10}; transition:box-shadow 0ms linear; }
`
export const buttonWithbackgroundShadow = css<Props>` transition: box-shadow 400ms ease, border-color 400ms ease;
  border-color:${p => p.background ? transparentize(0.8, p.bg) : c.black10};
  &:hover{ box-shadow: 0 2px 7px 0px ${p => transparentize(0.75, p.bg ? p.bg : c.black10)},
                       0 5px 24px 1px ${p => transparentize(0.75, p.bg ? p.bg : c.black10)}; }
  &:active{ box-shadow: 0 1px 1px 0 ${p => transparentize(0.75, p.bg ? p.bg : c.black10)};
      transition:box-shadow 0ms linear; border-color:transparent; }
`
export const buttonWithOutline = css` ${baseButton} ${buttonWithTranslation}
  border:2px solid ${c.black20};
`
export const buttonWithColoredBackground = css<Props>` color:${p=> p.color ? p.color : c.white};
  background:${p => p.bg ? p.bg : c.white};
  &:hover{ background:${p => p.bg ? lighten(0.05, p.bg) : c.white90};}
  &:active{ background:${p => p.bg ? lighten(0.1, p.bg) : c.white40}; }
`

export const button = css` ${baseButton} ${buttonWithShadow} ${buttonWithTranslation} ${buttonWithbackgroundShadow} ${buttonWithColoredBackground}
  color:${p => p.color ? p.color : c.black90};
`

export const SecondaryButton = styled(Box)` ${buttonWithOutline} ${buttonWithShadow} ${buttonPadding} ${buttonText} `
export const ButtonInput = styled.input` ${button} ${s.spacingProps as any} `




const Button: React.SFC<Props> = (props: Props) => {
  const { iconName, useRightIcon, ...rest } = props
  return(
    <StyledButton {...rest}>
      {iconName && !useRightIcon && <Icon name={iconName} mr={8}/>}
      {props.children}
      {iconName && useRightIcon && <Icon name={iconName} ml={8}/>}
    </StyledButton>
  )
}

Button.defaultProps = {
  bg: c.brand,
  color: c.black,
}

export default Button


const disabledButton = css` ${baseButton}
  background-color:${p => transparentize(0.8, p.theme.opposite)}  !important;
  cursor:not-allowed; box-shadow:none !important; border:0 !important;
  text-shadow:none;
  &:hover{ background-color:${p => p.theme.disabledBackground} !important; }
`

const StyledButton = styled.button.attrs<Props>({})`
  ${s.boxProps}
  text-transform: uppercase;
  ${p => !p.disabled ? button : '' }
  ${p => p.background ? buttonWithColoredBackground : ''}
  ${p => p.disabled ? disabledButton : '' }
  ${m.t16} ${m.tBold} transition:500ms;
  ${p => p.withShadow && `text-shadow:0 0 2px rgba(0,0,0,0.2);` }
`


