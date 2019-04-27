import * as React from 'react'
import Instafeed from 'react-instafeed'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

const instafeedTarget = 'Insta'

type Props = {
  template: string,
  limit: number,
}

const InstaFeed: React.FunctionComponent<Props> = (props: Props) => {
  const { template, limit } = props
  
  return (
    <Wrapper id={instafeedTarget}>
      <Instafeed
        limit={limit.toString()}
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


export default InstaFeed


const columns = 3
const margin = 4
const itemWidth = (m.sizes.contentWidth / 3) - (margin * columns * 2)

const Wrapper = styled(Box)` ${s.flxRow} ${s.jcc} ${s.flxWrap} margin:-4px;
  .item{ border-radius:2px; margin:4px; ${s.anchor} border-radius:2px; overflow:hidden;
    width:${itemWidth}px; display:block; ${s.prel} 

    .background{ width:100%; }
    .overlay{ ${s.pabs} left:0; right:0; top:0; bottom:0; opacity:0; transition: opacity 300ms; background:rgba(0,0,0,0.4);
      .caption{ padding:20px; color:white; }
    }
    &:hover .overlay{ opacity:1; transition: opacity 100ms; }
  }
`