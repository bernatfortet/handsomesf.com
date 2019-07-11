import { Figma } from 'figma-cms'
import React from 'react'
import { withSiteData } from 'react-static'

import config from 'config'
import stephImg from 'images/steph.jpg'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

import Layout from 'components/core/Layout'
import Markdown from 'components/core/Markdown'
import Quote from 'components/core/Quote'
import ScreenMeta from 'components/core/ScreenMeta'
import Button from 'components/global/Button'
import Link from 'components/global/Link'

export default withSiteData(({ figmaData }) => {
  const figma = new Figma(figmaData)
  const canvas = figma.getCanvas('Pages')
  const frame = canvas.getFrame('About')

  const title = frame.getElement('title').getCharacters()
  // console.log('title: ', title)
  const body = frame.getElement('body').getCharacters()

  const title2 = frame.getElement('title2').getCharacters()
  const body2 = frame.getElement('body2').getCharacters()

  return (
    <Layout>
      <ScreenMeta title='About' />
      <m.ResponsiveRow w='100%' aifs jcsb>
        <Column maxw={m.sizes.leftColumn} mr={40}>
          <m.Title as='h2' mb={12}>{title}</m.Title>
          <Markdown content={body} />


        </Column>
        <Quote mt={40} />

      </m.ResponsiveRow>

      <m.ResponsiveRow w='100%' aifs jcsb mt={60}>
        <Column maxw={m.sizes.leftColumn} mr={40}>
          <m.Title as='h2' mb={12}>{title2}</m.Title>
          <Markdown content={body2} />

          <Link href={config.consultationUrl} target='_blank' mv={20}>
            <Button iconName='phone'>Free consultation</Button>
          </Link>
        </Column>

        <m.Img width={m.sizes.rightImage} height='auto' src={stephImg} mt={40} />


      </m.ResponsiveRow>
    </Layout>
  )
})
