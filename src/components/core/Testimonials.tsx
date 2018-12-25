import { Figma } from 'figma-cms'
import * as React from 'react'
import { withSiteData } from 'react-static'

import person2 from 'images/genevieve.jpg'
import person3 from 'images/ligia.jpg'
import person1 from 'images/sophia.jpg'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

import Markdown from 'components/core/Markdown'

const testimonialImages = [person1, person2, person3]


const Testimonials = ({ figmaData }) => {
  const figma = new Figma(figmaData)
  const canvas = figma.getCanvas('Pages')
  const frame = canvas.getFrame('Testimonials')

  const testimonials = frame.getSeries(['title', 'description'])

  return testimonials.map((item: any, key) => {
    const { title, description, includes } = item
    return (
      <m.ResponsiveRow key={key}>
        <m.Img sz={100} src={testimonialImages[key]} br={100} mr={24} />

        <Column maxw={500} mr={40}>
        
          <m.SubTitle mb={8}>{title}</m.SubTitle>

          <Markdown content={description} />
        </Column>


      </m.ResponsiveRow>
    )
  })
}

export default withSiteData(Testimonials)