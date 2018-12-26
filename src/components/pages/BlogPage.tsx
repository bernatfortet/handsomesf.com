import React from 'react'
import { withSiteData } from 'react-static'

import { Box } from 'styles'

import InstagramFeed from 'components/core/InstagramFeed'
import Layout from 'components/core/Layout'
import ScreenMeta from 'components/core/ScreenMeta'

export default withSiteData(data => {
  return (
    <Layout>
      <ScreenMeta title='Blog' />
      <InstagramFeed />
    </Layout>
  )
})
