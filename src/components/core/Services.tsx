import { Figma } from 'figma-cms'
import * as React from 'react'
import { withSiteData } from 'react-static'

import config from 'config'
import bullet from 'images/bullet.svg'
import service1 from 'images/service1.jpg'
import service2 from 'images/service2.jpg'
import service3 from 'images/service3.jpg'
import service4 from 'images/service4.jpg'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

import Markdown from 'components/core/Markdown'
import Button from 'components/global/Button'
import Link from 'components/global/Link'

const serviceImages = [service1, service2, service3, service4 ]

const Services = ({ figmaData }) => {

  const figma = new Figma(figmaData)
  const canvas = figma.getCanvas('Pages')
  const frame = canvas.getFrame('Services')

  const services = frame.getSeries(['title', 'description', 'includes', 'buttonText', 'iconName'])
  
  return services.map((service: any, key) => {
    const { title, description, includes, buttonText, iconName } = service
    return (
      <Wrapper w='100%' key={key} mb={120} aifs jcsb>
        <Column maxw={m.sizes.leftColumn} mr={40}>
          <m.SubTitle mb={12}>{title}</m.SubTitle>

          <Markdown content={description} mb={20} />

          {includes && <ul>
            {includes.split('\n').map((i, key) => <IncludeItem key={key}>{i}</IncludeItem>)}
          </ul>}

          <Link href={config.bookingsUrl} target='_blank'>
            <Button asfs mt={20} mb={40} iconName={iconName}>{buttonText}</Button>
          </Link>

        </Column>

        <m.Img width={m.sizes.rightImage} height='auto' src={serviceImages[key]} />


      </Wrapper>
    )
  })
}

export default withSiteData(Services)

const Wrapper = styled(m.ResponsiveRow)` 
  ul{  list-style:none; margin-left:0; padding-inline-start:0; margin:-24px 0 0; }
`
const IncludeItem = styled.li` ${m.tBody} margin-left:21px; margin-bottom:12px;
  &:before{
    content:''; display:inline-block; 
    margin-left:-21px; margin-right:12px;
    height:11px; 
    width:9px;  background:url(${bullet}) no-repeat;  background-size:contain; 
  }
`