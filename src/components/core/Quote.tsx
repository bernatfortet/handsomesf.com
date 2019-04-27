import { transparentize } from 'polished'
import * as React from 'react'

import styled, { css } from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles'

type Props = {
} & BoxProps

const Quote: React.FunctionComponent<Props> = (props: Props) => {
  const { ...rest } = props

  return (
    <Column maxw={400} {...rest}> 

      <WordTitle ph={28} pv={20} asfs br={2}>
        <Row aib>
          <Word serif bold mr={4}>hand·​some</Word>
          <Type serif>adjective</Type>
        </Row>
        <Pronunciation serif>/ˈhan(t)səm/</Pronunciation>
      </WordTitle>

      <Definition serif ph={30} pt={40} br={2}>
        <p><strong>1.</strong> having pleasing proportions, relationships, or arrangements, as of shapes, forms, or colors; attractive: <br /></p>
        <p><strong>2.</strong> exhibiting skill, taste, and refinement; well-made:</p>
      </Definition>
    </Column>
  )
}


export default Quote


const WordTitle = styled(Column)`  background:${c.brand}; color:#523700; `
  const Word = styled(m.T24)`  `
  const Type = styled(m.T16)` `
  const Pronunciation = styled(m.T20)` `
  const Definition = styled(m.T20)` ${s.prel} left:43px; top:-40px;
    background:${transparentize(0.9, c.brand)}; color:#523700; line-height:1.6;
  `