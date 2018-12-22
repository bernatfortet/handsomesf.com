import * as React from 'react'

import heroImage from 'images/heroImage.jpg'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

import Logo from 'components/core/Logo'

type Props = {
}

const HomeHero: React.SFC<Props> = (props: Props) => {
  const {} = props

  return(
    <Row jcsb w='100%' maxw={1200} mt={20}>
      <Column maxw={640} mr={80}>
        <Logo height={112} mb={60} />
        <Title mb={60}>
          Customized organizational systems to support your daily routines. 
        </Title>
        <Desc>
          Clear out the clutter and noise of brands and frills that vye for your attention. Make a home for what serves what’s most important to you. When everything has a place, you can easily reset any mess. 
          <br />
          <br />

          Make it nice, and be nice to yourself.
        </Desc>
      </Column>

      <Img src={heroImage} />

    </Row>
  )
}

export default HomeHero

const Title = styled(m.T40)` ${m.brandon} `
const Desc = styled(m.T20)` ${m.workSans} line-height:1.4; color:${c.black80}; `
const Img = styled.img` max-height:600px;`