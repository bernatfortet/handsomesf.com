import { transparentize } from 'polished'
import * as React from 'react'
import Instafeed from 'react-instafeed'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

import FindUsRow from 'components/core/FindUsRow'
import InstaFeed from 'components/core/InstaFeed'

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
      <FindUsRow />

      <InstaFeed limit={5} template={template} />
    </Wrapper>
  )
}


export default InstagramStrip

const Wrapper = styled(Column)` width:100vw;
  .item{ width:15%; display:block; }
  ${s.media.sm` .item{ width:140px; } `}
`

