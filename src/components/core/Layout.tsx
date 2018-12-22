import * as React from 'react'

import { Box, Column, GlobalStyles, m, Row, s } from 'styles'

import Footer from 'components/core/Footer'
import Nav from 'components/core/Nav'

type Props = {
  children: any,
  hideLogo?: boolean,
}

const Layout = (props: Props) => {
  const { children, hideLogo } = props

  return (
    <Column hCenter pb={50}>
      <GlobalStyles />
      <Nav hideLogo={hideLogo} />
      {children}
      <Footer />
    </Column>
  )
}

export default Layout