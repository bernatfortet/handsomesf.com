import { transparentize } from 'polished'
import React from 'react'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

import Logo from 'components/core/Logo'
import Icon from 'components/global/Icon'
import Link from 'components/global/Link'
import RootPressable from 'components/global/Pressable'

type Props = {
  hideLogo?: boolean,
}

type State = {
  showMenu: boolean,
}

export default class Nav extends React.Component<Props, State> {

  state = {
    showMenu: false
  }

  render() {
    const { hideLogo } = this.props
    const { showMenu } = this.state

    return (
      <Row w={'100%'} hCenter flex1>
        <Row w={'100%'} maxw={m.sizes.contentWidth} mh={20} vCenter flxWrap>
          {!hideLogo && <Logo height={32} />}
          <Box flex1 />

          <Hamburger name='menu' onMouseDown={this.onToggleMenu} />

          <SideMenu hCenter isVisible={showMenu}>
            <Icon name='close' p={20} size={32} onMouseDown={this.onToggleMenu} />
            {this.renderLinks()}
          </SideMenu>

          <HorizontalMenu mr={-20}>
            {this.renderLinks()}
          </HorizontalMenu>

        </Row>
      </Row>
    )
  }

  renderLinks() {
    return (
      <Row vCenter className='links'>
        <Link to='/services' title='Services'>
          <Pressable p={20}>
            <ItemText>Services</ItemText>
          </Pressable>
        </Link>

        <Link to='/about' title='About'>
          <Pressable p={20}>
            <ItemText>About</ItemText>
          </Pressable>
        </Link>

        <Link to='/blog' title='Blog'>
          <Pressable p={20}>
            <ItemText>Blog & Testimonials</ItemText>
          </Pressable>
        </Link>

        <Link to='/shop' title='Shop'>
          <Pressable p={20}>
            <ItemText>Shop</ItemText>
          </Pressable>
        </Link>
      </Row>
    )
  }

  onToggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

}


const Pressable = p => <RootPressable color={c.black60} hoverBg={c.black10} {...p} />


const hamburgerMinWidth = '940px'
const ItemText = styled(m.T20)`${m.brandon} ${m.tBold} `

const SideMenu = styled(Column) <{ isVisible: boolean }>`
    width:100%; position:fixed; left:0; top:0; right:0; bottom:0; z-index:99999; transition:transform 300ms ease;
    background:${transparentize(0.02, 'white')};
		transform: translateX(${p => p.isVisible ? '0px' : '-100%'});
		& .links{ ${s.flxCol} }
		& ul{ margin:0; }
		@media (min-width: ${hamburgerMinWidth}){ display:none; }
	`
const HorizontalMenu = styled(Row)` 
		@media (max-width: ${hamburgerMinWidth}){ display:none; }
	`

const Hamburger = styled(Icon).attrs({ size: 28 })` padding:20px; ${s.anchor}
		@media (min-width: ${hamburgerMinWidth}){ display:none; }
	`