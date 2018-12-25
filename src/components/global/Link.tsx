import { Link as RouterLink } from '@reach/router'
import * as React from 'react'

import styled from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

interface Props extends BoxProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  //Link props
  to?: string,
  id?: string,

  //Anchor props
  href?: string,
  target?: string,
  title?: string,

  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

const Link: React.SFC<Props> = (props: Props) => {
  const { to, href, target, title, onClick, children, ...rest } = props

  return <Box {...rest}>
    {href && <A href={href} target={target} title={title} onClick={onClick}>{children}</A>}
    {to && <StyledRouterLink to={to} title={title} onClick={onClick}>{children}</StyledRouterLink>}
  </Box>
}

export default Link
const A = styled.a` display:flex; ${s.boxProps} `
const StyledRouterLink = styled(RouterLink)` display:flex; width:100%; ${s.boxProps} `
