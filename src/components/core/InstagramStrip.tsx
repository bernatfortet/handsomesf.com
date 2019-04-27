import { transparentize } from 'polished'
import * as React from 'react'
import Instafeed from 'react-instafeed'

import config from 'config'
import instagram from 'images/instagram.svg'
import pinterest from 'images/pinterest.svg'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

import InstaFeed from 'components/core/InstaFeed'
import Link from 'components/global/Link'
import Pressable from 'components/global/Pressable'

type Props = {
}


const InstagramStrip: React.FunctionComponent<Props> = (props: Props) => {
  const {} = props

  const template =
    '<a href="{{link}}" target="_blank" class="item">' +
      '<img class="background" src="{{image}}" />' +
      '<div class="overlay">' +
        '<div class="inner">' +
          '<p class="caption">{{caption}}</p>' +
          '<p class="location">{{location}}</p>' +
        '</div>' +
      '</div>' +
    '</a>'


  return (
    <Wrapper center pv={20} bg={transparentize(0.8, c.brand)}>
      <Row vCenter mb={8}>
        <m.T16 bold mr={8}>Find us on: </m.T16>
        <Link href={config.instagramUrl}>
          <Pressable row center>
            <m.Img width={20} height={20} src={instagram} mr={4}/>
            <m.T16 lh={20} bold>Instagram</m.T16>
          </Pressable>
        </Link>
        <m.T16 mh={8}>and, </m.T16>

        <Link href={config.pinterestUrl}>
          <Pressable row center>
            <m.Img width={20} height={20} src={pinterest} mr={4}/>
            <m.T16 lh={20} bold>Pinterest</m.T16>
          </Pressable>
        </Link>
      </Row>
      <InstaFeed limit={5} template={template} />
    </Wrapper>
  )
}


export default InstagramStrip

const Wrapper = styled(Column)` width:100vw;
  .item{ width:15%; display:block; }
  ${s.media.sm` .item{ width:140px; } `}
`

