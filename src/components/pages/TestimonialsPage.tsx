import React from 'react'
import { withSiteData } from 'react-static'

import yelpLogo from 'images/yelp_logo.svg'

import { m, Row } from 'styles'

import Layout from 'components/core/Layout'
import ScreenMeta from 'components/core/ScreenMeta'
import Testimonials from 'components/core/Testimonials'
import Link from 'components/global/Link'
import Pressable from 'components/global/Pressable'

export default withSiteData(data => {
  return (
    <Layout>
      <ScreenMeta title='Testimonials' />
      <Testimonials />
      <Link href='https://www.yelp.com/biz/spesso-san-francisco-2' target='_blank' title='Yelp Spesso - Home Organization San Francisco'>
        <Pressable row vCenter mt={12}>
          <m.Img width='auto' height='48' src={yelpLogo} mr={20} />
          <m.T16>See what yelpers have to say about our work!
            <m.Text op={0.6}>(Former business name spesso.co)</m.Text>
          </m.T16>
        </Pressable>
      </Link>
    </Layout>
  )
})

