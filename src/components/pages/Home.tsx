import React from 'react'
import { withRouteData } from 'react-static'

import { Box } from 'styles'

import HomeHero from 'components/core/HomeHero'
import Layout from 'components/core/Layout'
import WebMeta from 'components/core/WebMeta'

export default withRouteData(data => {
  return (
    <Layout hideLogo>
      <WebMeta />
      <HomeHero />
    </Layout>
  )
})
