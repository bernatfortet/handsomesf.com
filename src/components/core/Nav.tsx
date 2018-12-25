import { Link as RouterLink } from '@reach/router'
import { transparentize } from 'polished'
import React from 'react'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles'

import Logo from 'components/core/Logo'
import Button from 'components/global/Button'
import Icon from 'components/global/Icon'
import RootPressable from 'components/global/Pressable'

type Props = {
  hideLogo?: boolean,
}

type State = {
  showMenu: boolean,
  scrollY: number,
}

export default class Nav extends React.Component<Props, State> {

  state = {
    showMenu: false,
    scrollY: window.scrollY,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  render() {
    const { hideLogo } = this.props
    const { showMenu, scrollY } = this.state

    return (
      <Box h={74} mb={60}>
        <Wrapper w={'100%'} vCenter flxWrap>
          <Ribbon />
          <Inner h={74} mt={8} vCenter >
            <StyledLogo height={54} isVisible={!hideLogo || scrollY > 100}/>
            <Box flex1 />

            <Hamburger name='menu' onMouseDown={this.onToggleMenu} />

            <SideMenu hCenter isVisible={showMenu}>
              <Icon name='close' p={20} size={32} onMouseDown={this.onToggleMenu} />
              {this.renderLinks()}
            </SideMenu>

            <HorizontalMenu>
              {this.renderLinks()}
            </HorizontalMenu>
          </Inner>
          <BottomBorder isActive={scrollY > 0} />
        </Wrapper>
      </Box>
    )
  }

  renderLinks() {
    return (
      <Row vCenter className='links'>

        <Link to='/' title='Home' />
        <Link to='/services' title='Services' />
        <Link to='/about' title='About' />
        <Link to='/testimonials' title='Testimonials' />
        <Link to='/blog' title='Blog' />

        <Button iconName='phone' ml={24}>Free consultation</Button>

        {/* <Link to='/shop' title='Shop'>
          <Pressable p={20}>
            <ItemText>Shop</ItemText>
          </Pressable>
        </Link> */}
      </Row>
    )
  }

  onToggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  onScroll = () => {
    this.setState({ scrollY: window.scrollY })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

}

const Link = p => {
  const isActive = window.location.pathname == p.to
  return (
    <RouterLink {...p}>
      <Pressable p={20} color={isActive ? c.black : c.black60}>
        <ItemText>{p.title}</ItemText>
      </Pressable>
    </RouterLink>
  )
}


const Pressable = p => <RootPressable color={c.black60} hoverBg={transparentize(0.8, c.coral)} {...p} />

const Wrapper = styled(Row)` width:100%; position:fixed; top:0; left:0; right:0; background:white; z-index:10; `
  const Inner = styled(Row)` width:${m.sizes.contentWidth}px; margin: 0 auto; padding:0 20px; `
  const Ribbon = styled(Box)` height:4px; width:100%; background:${c.coral}; `
  const BottomBorder = styled(Box)<{isActive: boolean}>` width:100%; height:1px; background:${c.black10}; opacity:0; ${s.anim} ${p => p.isActive && `opacity:1; `}   `


  const StyledLogo = styled(Logo)<{isVisible: boolean}>` ${p => p.isVisible ? 'opacity:1;' : 'opacity:0;'} transition:400ms; `

const hamburgerMinWidth = '940px'
const ItemText = styled(m.Text)` ${m.t20} ${m.brandon} ${m.tBold} `

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