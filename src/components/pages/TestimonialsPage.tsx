import React from 'react'
import { withSiteData } from 'react-static'

import Layout from 'components/core/Layout'
import Testimonials from 'components/core/Testimonials'

export default withSiteData(data => {
  return (
    <Layout>
      <Testimonials />
    </Layout>
  )
})
