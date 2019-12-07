import React from 'react'

import bagsImg from 'images/bags.jpg'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

type Props = {
}

const BagsSection: React.FunctionComponent<Props> = (props: Props) => {
  const {} = props

  return <>
      <m.Title asfs mt={120} mb={40}>Perfect Fill Bulk Bags</m.Title>
      <m.ResponsiveRow w='100%' aifs jcsb mb={80}>
        <Grid>
          <m.Img src={bagsImg} mr={20} />
          <Text>
            These handy little numbers take the guesswork out of shopping in bulk. You’ll know just what you want, and exactly how much. You won’t have to grab a sticker or a twist tie, or rewrite that code for the upteenth time. And when you take the goods home, you’ll get the perfect fill.
          </Text>
        </Grid>

        
      </m.ResponsiveRow>
  </>
}


export default BagsSection

const Text = styled(m.Text)` ${m.tBody} `

const Grid = styled(Box)`
  display:grid; grid-template-columns:1.5fr 1fr; grid-gap:40px;
  ${s.media.md` grid-template-columns:1fr; `}
`