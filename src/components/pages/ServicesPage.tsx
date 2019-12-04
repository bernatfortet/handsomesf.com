import { Figma } from 'figma-cms'
import React from 'react'
import { withSiteData } from 'react-static'

import styled from 'styled-components'
import { Box, Column, m, s } from 'styles'

import Layout from 'components/core/Layout'
import Markdown from 'components/core/Markdown'
import ScreenMeta from 'components/core/ScreenMeta'
import Services from 'components/core/Services'

export default withSiteData(({ figmaData }) => {
  const figma = new Figma(figmaData)
  const canvas = figma.getCanvas('Pages')
  const frame = canvas.getFrame('Services')

  const title = frame.getElement('title').getCharacters()
  // const body = frame.getElement('body') ? frame.getElement('body').getCharacters() : null
  const servicesList = frame.getContainer('servicesList')

  
  return (
    <Layout>
      <ScreenMeta title='Services' />
      
      <m.ResponsiveRow w='100%' aifs jcsb mb={80}>
        <ResponsiveColumn maxw={m.sizes.leftColumn} mr={80}>
          {title && <m.Title as='h1' mb={12}>{title}</m.Title>}
        </ResponsiveColumn>
        
      </m.ResponsiveRow>

      <Services servicesList={servicesList}/>

    </Layout>
  )
})


const ResponsiveColumn = styled(Column)` ${s.media.md` margin-right:0px;`} `