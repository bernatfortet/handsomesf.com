import * as React from 'react'

import config from 'config'
import instagram from 'images/instagram.svg'
import pinterest from 'images/pinterest.svg'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

import Link from 'components/global/Link'
import Pressable from 'components/global/Pressable'

type Props = {
}

const FindUsRow: React.FunctionComponent<Props> = (props: Props) => {
  const {} = props

  return (
    <Row vCenter mb={8}>
      <m.T16 bold mr={8}>Find us on: </m.T16>
      <Link href={config.instagramUrl}>
        <Pressable row center>
          <m.Img width={20} height={20} src={instagram} mr={4}/>
          <m.T16 lh={20} bold>Instagram</m.T16>
        </Pressable>
      </Link>
      <m.T16 mh={8}>and, </m.T16>

      <Link href={config.pinterestUrl}>
        <Pressable row center>
          <m.Img width={20} height={20} src={pinterest} mr={4}/>
          <m.T16 lh={20} bold>Pinterest</m.T16>
        </Pressable>
      </Link>
    </Row>
  )
}


export default FindUsRow