import * as React from 'react'

import { Box, BoxProps, Column, m, Row, s } from 'styles/index'
import styled from 'styled-components'

export type Props = {
  name: string,
  size?: number,
  color?: string,
  opacity?: number,
  op?: number,
  className?: string,
  style?: React.CSSProperties,
  onClick?: () => void,
  onMouseDown?: () => void,
  title?: string,
} & BoxProps

export default class Icon extends React.Component<Props> {

  static defaultProps = {
    size: 20,
  }

  render() {
    const { name, color, className, style, opacity, op, onClick, size, ...rest } = this.props

    const nameCompat = name.replace(/-/g, "_")
    const iconProps = {
      style: {
        maxWidth: size,
        maxHeight: size,
        boxSizing: 'content-box' as any,
        color,
        opacity: op ? op : opacity ? opacity : 1,
        fontSize: size,
        ...style
      },
      onClick: onClick,
      ...rest,
    }


    return <StyledMaterialIcon className={`icon material-icons ${className}`} {...iconProps}>{nameCompat}</StyledMaterialIcon>
  }

}

interface IconProps {
  tag: any,
  op?: number,
  opacity?: number,
}

const IconTagComponent = ({ tag, children, ...props }) => React.createElement(tag, props, children)

export const IconWithStyles = styled(IconTagComponent).attrs<IconProps>({})` ${s.boxProps} 
  ${ p => p.op ? `opacity:${p.op}` : ''}
  ${ p => p.opacity ? `opacity:${p.opacity}` : ''}
`

const StyledMaterialIcon = styled.i` ${s.spacingProps} text-align: center; `
