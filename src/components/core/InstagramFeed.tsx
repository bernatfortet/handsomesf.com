import * as React from 'react'
import Instafeed from 'react-instafeed'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

type Props = {
}

const InstagramFeed: React.SFC<Props> = (props: Props) => {
  const {} = props

  const instafeedTarget = 'Insta'

  return(
    <Box id={instafeedTarget}>
      <Instafeed
        limit='5'
        resolution='standard_resolution'
        sortBy='most-recent'
        target={instafeedTarget}
        template=''
        userId='userIdInstagramApiString'
        clientId='74deaeac907c4b1eb8117ab9d115a846'
        accessToken='accessTokenInstagramApiString'
      />
    </Box>
  )
}

export default InstagramFeed