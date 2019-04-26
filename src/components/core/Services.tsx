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

const Services = ({ servicesList }) => {

  const services = servicesList.getSeries(['title', 'description', 'includes', 'buttonText', 'iconName', 'attribution'])

  return(
    <Box flxWrap jcsb mh={-40}>
      {services.map((service: any, key) => {
        const { title, description, includes, buttonText, iconName } = service
        return (
          <Wrapper key={key} mb={60} aifs jcsb>
            <Box mh={40}>
              <Img width={400} height={400} src={serviceImages[key]} cover />
              <m.SubTitle as='h2' mt={12} mb={12}>{title}</m.SubTitle>

              {description && <Markdown content={description} />}

              {includes && <ul>
                {includes.split('\n').map((item, key) => <IncludeItem key={key}>
                  <Markdown content={item} mt={-26} />
                </IncludeItem>)}
              </ul>}

              <Link href={config.bookingsUrl} target='_blank' mt={28} >
                <Button asfs iconName={iconName}>{buttonText}</Button>
              </Link>
            </Box>

          </Wrapper>
        )
      })}
    </Box>
  )

}

export default Services

const Wrapper = styled(Column)` 
  width:50%;
  ${s.media.md` width:100%; `}
  ul{ margin-top:12px; list-style:none; margin-left:0; padding-inline-start:0; }
`
const Img = styled(m.Img)` width:400px;  ${s.media.md` width:100%; `} `
const IncludeItem = styled.li` ${m.tBody} margin-left:21px; margin-bottom:12px;
  &:before{
    content:''; display:inline-block; 
    margin-left:-21px; margin-right:12px;
    height:11px; 
    width:9px;  background:url(${bullet}) no-repeat;  background-size:contain; 
  }
`