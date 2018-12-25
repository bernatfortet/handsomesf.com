import * as React from 'react'
import { withRouteData } from 'react-static'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles/index'

import Layout from 'components/core/Layout'

export default withRouteData(data => {
  return (
    <Layout>
      <Box center flex1 h='100%'>
        Not Found
      </Box>
    </Layout>
  )
})
