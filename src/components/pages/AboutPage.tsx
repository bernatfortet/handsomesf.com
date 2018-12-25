import { Figma } from 'figma-cms'
import React from 'react'
import { withSiteData } from 'react-static'

import config from 'config'
import stephImg from 'images/steph.jpg'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

import Layout from 'components/core/Layout'
import Markdown from 'components/core/Markdown'
import Button from 'components/global/Button'
import Link from 'components/global/Link'

export default withSiteData(({ figmaData }) => {
  const figma = new Figma(figmaData)
  const canvas = figma.getCanvas('Pages')
  const frame = canvas.getFrame('About')

  const title = frame.getElement('title').getCharacters()
  const body = frame.getElement('body').getCharacters()

  return (
    <Layout>
      <m.ResponsiveRow w='100%' aifs jcsb>
        <Column maxw={m.sizes.leftColumn} mr={40}>
          <m.Title>{title}</m.Title>
          <Markdown content={body} />

          <Link href={config.bookingsUrl} target='_blank'>
            <Button iconName='phone'>Free consultation</Button>
          </Link>
        </Column>
        <m.Img w={m.sizes.rightImage} h='auto' src={stephImg}/>
      </m.ResponsiveRow>
    </Layout>
  )
})
