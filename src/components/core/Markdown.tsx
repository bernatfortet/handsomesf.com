import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import styled from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles'

type Props = {
  content: string,
} & BoxProps

const Markdown: React.SFC<Props> = (props: Props) => {
  const { content, ...rest } = props

  return <Box {...rest}>
    <StyledMarkdown source={content} />
  </Box>
}

export default Markdown


const StyledMarkdown = styled(ReactMarkdown)`
  p{ ${m.tBody} margin-top:0; }
  a{ ${s.anchor} }
  ul{ padding-left:20px; }
  li{ ${m.tBody} margin:4px 0; }

`