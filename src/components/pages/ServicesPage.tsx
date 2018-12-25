import React from 'react'
import { withRouteData } from 'react-static'

import { Box } from 'styles'

import Layout from 'components/core/Layout'
import Services from 'components/core/Services'

export default withRouteData(data => {
  return (
    <Layout>
      <Services />
    </Layout>
  )
})
