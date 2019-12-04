import React from 'react'

import heartfeltImg from 'images/heartfelt.jpg'
import holidayMarketImg from 'images/holiday-market.jpg'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

type Props = {
}

const PopupsList: React.FunctionComponent<Props> = (props: Props) => {
  const {} = props

  return (
    <Box>
      <m.SubTitle mb={12}>
        Sunday December 8th: Second Annual Plastic Free Holiday Market
      </m.SubTitle>
      <m.Img src={holidayMarketImg} />

      <m.SubTitle mb={12} mt={40}>
        December 9th - January 9th: Center booth at Heartfelt in Bernal Heights
      </m.SubTitle>
      <m.Img src={heartfeltImg}/>
      
    </Box>
  )
}


export default PopupsList