import * as React from 'react'

import { Box, c, Column, GlobalStyles, m, Row, s } from 'styles'

import Footer from 'components/core/Footer'
import Nav from 'components/core/Nav'
import WebMeta from 'components/core/WebMeta'

type Props = {
  children: any,
  hideLogo?: boolean,
}

const Layout = (props: Props) => {
  const { children, hideLogo } = props

  return (
    <Column w='100%' minh='100%' maxw={m.sizes.contentWidth} hCenter pb={50} ph={20} style={{ margin:'0 auto'}}>
      <GlobalStyles />
      <WebMeta />
      <Nav hideLogo={hideLogo} />
      {children}
      <Box flex1 />
      <Footer />
    </Column>
  )
}

export default Layout