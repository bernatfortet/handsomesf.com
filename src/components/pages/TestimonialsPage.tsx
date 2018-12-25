import React from 'react'
import { withSiteData } from 'react-static'

import { Box } from 'styles'

import InstagramFeed from 'components/core/InstagramFeed'
import Layout from 'components/core/Layout'
import Testimonials from 'components/core/Testimonials'

export default withSiteData(data => {
  return (
    <Layout>
      {/* <Testimonials /> */}

      <InstagramFeed />
    </Layout>
  )
})
