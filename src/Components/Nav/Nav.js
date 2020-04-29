import React from 'react'
import { Link } from 'react-router-dom'
import PageNav from '../PageNav/PageNav'
import logo from '../../Assets/Main-Logo-Icon.png'
import styled from 'styled-components'

const Nav = () => {
  return (
    <NavBar className='nav-bar'>
      <LogoBox className='logo-box'>
        <Link to='/'>
          <Logo className='logo-icon' src={logo} />
        </Link>
      </LogoBox>
      <Links className='links-container'>
        <PageNav tabName='About' path='/about' />
        <PageNav tabName='Projects' path='/projects' />
        <PageNav tabName='Content' path='/content' />
        <PageNav tabName='Contact' path='/contact' />
      </Links>
    </NavBar>
  )
}

const NavBar = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
`

const LogoBox = styled.section`
  width: 10%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  height: 3rem;
`

const Links = styled.section`
  width: 50%;
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export default Nav