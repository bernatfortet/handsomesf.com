import * as React from 'react'

import config from 'config'
import heroImage from 'images/heroImage.jpg'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

import Logo from 'components/core/Logo'
import Button from 'components/global/Button'
import Link from 'components/global/Link'

type Props = {
  title: string,
}

const HomeHero: React.SFC<Props> = (props: Props) => {
  const { title } = props

  return(
    <Grid>
      <Logo height={112} minw={260} />
      <Title maxw={700} as='h2'>{title}</Title>
    </Grid>
  )
}

export default HomeHero

const Title = styled(m.T40)` ${m.brandon} `

const TextColumn = styled(Row)` margin-right:80px; ${s.media.md` margin-right:0px;`} `

const Grid = styled(Box)`
  display:grid; grid-template-columns:1fr 1.2fr; grid-gap:20px;
  ${s.media.md` grid-template-columns:1fr; `}
`