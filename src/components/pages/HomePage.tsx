import { Figma } from 'figma-cms'
import React from 'react'
import { withSiteData } from 'react-static'

import { Box, m } from 'styles'

import HomeHero from 'components/core/HomeHero'
import InstagramStrip from 'components/core/InstagramStrip'
import Layout from 'components/core/Layout'
import Services from 'components/core/Services'
import WebMeta from 'components/core/WebMeta'

export default withSiteData(({ figmaData }) => {
  const figma = new Figma(figmaData)
  const canvas = figma.getCanvas('Pages')
  const frame = canvas.getFrame('HomeScreen')

  const heroData = {
    title: frame.getElement('title').getCharacters(),
  }
  const servicesList = canvas.getFrame('Services').getContainer('servicesList')


  return (
    <Layout hideLogo>
      <WebMeta />
      <HomeHero {...heroData} />
      <m.UnderlinedTitle asfs mt={120} mb={40}>Services</m.UnderlinedTitle>
      <Services servicesList={servicesList} />
      
      <InstagramStrip />
    </Layout>
  )
})
