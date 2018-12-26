import React from 'react'
import { withSiteData } from 'react-static'

import { Box } from 'styles'

import Layout from 'components/core/Layout'
import ScreenMeta from 'components/core/ScreenMeta'

export default withSiteData(data => {
  return (
    <Layout>
      <ScreenMeta title='Shop' />
    
      <Box>Shop</Box>
    </Layout>
  )
})
