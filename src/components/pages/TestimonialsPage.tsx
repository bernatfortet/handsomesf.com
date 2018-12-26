import React from 'react'
import { withSiteData } from 'react-static'

import Layout from 'components/core/Layout'
import ScreenMeta from 'components/core/ScreenMeta'
import Testimonials from 'components/core/Testimonials'

export default withSiteData(data => {
  return (
    <Layout>
      <ScreenMeta title='Testimonials' />
      <Testimonials />
    </Layout>
  )
})
