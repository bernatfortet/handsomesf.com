import React from 'react'
import { withSiteData } from 'react-static'

import { Box, m } from 'styles'

import FindUsRow from 'components/core/FindUsRow'
import InstagramFeed from 'components/core/InstagramFeed'
import Layout from 'components/core/Layout'
import ScreenMeta from 'components/core/ScreenMeta'

export default withSiteData(data => {
  return (
    <Layout>
      <ScreenMeta title='Gallery' />
      <m.Title as='h1' mb={12}>Gallery</m.Title>

      <FindUsRow />
      <InstagramFeed />
    </Layout>
  )
})
