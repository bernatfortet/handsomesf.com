import * as React from 'react'
import Instafeed from 'react-instafeed'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

import InstaFeed from 'components/core/InstaFeed'

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

  return <InstaFeed limit={20} template={template} />
}

export default InstagramFeed
