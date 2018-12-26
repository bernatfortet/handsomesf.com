import * as React from 'react'
import ReactHelmet from 'react-helmet'

import config from 'config'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

type Props = {
  title?: string,
}

const ScreenMeta = (props: Props) => {
  const { title } = props
  const mainTitle = config.webTitle
  const composedTitle = title ? `${title} | ${mainTitle}` : mainTitle
  return (
    <ReactHelmet>
      <title>{composedTitle}</title>
    </ReactHelmet>
  )
}

export default ScreenMeta


const Wrapper = styled.div`  `
