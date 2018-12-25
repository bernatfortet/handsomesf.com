import * as React from 'react'
import Instafeed from 'react-instafeed'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

type Props = {
}

const InstagramFeed: React.SFC<Props> = (props: Props) => {
  const {} = props

  const instafeedTarget = 'Insta'

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

  return(
    <Wrapper id={instafeedTarget}>
      <Instafeed
        limit='5'
        resolution='standard_resolution'
        sortBy='most-recent'
        target={instafeedTarget}
        userId='9633677513'
        accessToken='9633677513.1677ed0.de589291b06d4c8b8642a1a7dac152ec'
        clientId='74deaeac907c4b1eb8117ab9d115a846'
        template={template}
      />
    </Wrapper>
  )
}

export default InstagramFeed

const columns = 3
const margin = 4
const itemWidth = (m.sizes.contentWidth / 3) - (margin * columns * 2)

const Wrapper = styled(Box)` ${s.flxRow} ${s.flxWrap} margin:-4px;
  .item{ border-radius:2px; margin:4px; ${s.anchor} border-radius:2px; overflow:hidden;
    width:${itemWidth}px; display:block; ${s.prel} 

    .background{ width:100%; }
    .overlay{ ${s.pabs} left:0; right:0; top:0; bottom:0; opacity:0; transition: opacity 300ms; background:rgba(0,0,0,0.4);
      .caption{ padding:20px; color:white; }
    }
    &:hover .overlay{ opacity:1; transition: opacity 100ms; }
  }
`