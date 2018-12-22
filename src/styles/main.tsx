import styled from 'styled-components'
import { s, BoxProps } from "@bernatfortet/global-styles";

export const spacing = {
  main: 16,
}

export const sizes = {
  contentWidth: 900
}

export const Svg = styled.svg<BoxProps>` ${s.boxProps}`
