import React from 'react'
import { withSiteData } from 'react-static'

import { Box } from 'styles'

import Layout from 'components/core/Layout'

export default withSiteData(data => {
  return (
    <Layout hideLogo>
      <Box>Shop</Box>
    </Layout>
  )
})
