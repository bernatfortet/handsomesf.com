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
  description: string,
}

const HomeHero: React.SFC<Props> = (props: Props) => {
  const { title, description } = props

  return(
    <m.ResponsiveRow jcsb style={{width: '100%'}} mt={-20} aifs>
      <TextColumn maxw={m.sizes.leftColumn}>
        <Logo height={112} mb={60} />
        <Title mb={60}>{title}</Title>
        <m.Body mb={40}>{description}</m.Body>

        <Link href={config.bookingsUrl} target='_blank'>
          <Button asfs iconName='phone' mb={40}>FREE CONSULTATION</Button>
        </Link>

      </TextColumn>

      <m.Img width={480} height='auto' src={heroImage} />

    </m.ResponsiveRow>
  )
}

export default HomeHero

const Title = styled(m.T40)` ${m.brandon} `


const TextColumn = styled(Column)` margin-right:80px; ${s.media.md` margin-right:0px;`} `