import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { periodIn, shrink, enlarge, slideUp, slideIn, slideUp2 } from '../../KeyFrames'
import { NavLink } from 'react-router-dom'
import logo from '../../Assets/white-logo.png'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  const [displayStatus, setDisplayStatus] = useState(false)

  window.addEventListener('scroll', (e) => handleScroll(e), true)
  const handleScroll = (e) => {
    if(e.srcElement.scrollTop > 10) {
      setDisplayStatus(true)
    } else {
      setDisplayStatus(false)
    }
  }
  
  return (
    <Content displayStatus={displayStatus}>
      <HomeSection currentLocation={location.pathname}>
        <OptionBox duration={2} currentLocation={location.pathname}>
          <StyledLogoLink to='/'>
            <Logo currentLocation={location.pathname} src={logo} />
          </StyledLogoLink>
        </OptionBox>
        <OptionBox duration={3} currentLocation={location.pathname}>
          <Option currentLocation={location.pathname}>
            <StyledLink to={'/about'} activeStyle={{color: 'rgb(255, 255, 245)', borderBottom: '1px solid rgb(255, 255, 245)'}}>
              About
            </StyledLink>
          </Option>
        </OptionBox>
        <OptionBox duration={4} currentLocation={location.pathname}>
          <Option currentLocation={location.pathname}>
            <StyledLink to={'/projects'} activeStyle={{color: 'rgb(255, 255, 245)', borderBottom: '1px solid rgb(255, 255, 245)'}}>
              Projects
            </StyledLink>
          </Option>
        </OptionBox>
        {/* <OptionBox duration={3} currentLocation={location.pathname}>
          <Option currentLocation={location.pathname}>
            <StyledLink to={'/content'} activeStyle={{color: 'rgb(255, 255, 245)', borderBottom: '1px solid rgb(255, 255, 245)'}}>
              Content
            </StyledLink>
          </Option>
        </OptionBox> */}
        <OptionBox duration={5} currentLocation={location.pathname}>  
          <Option currentLocation={location.pathname}>
            <StyledLink to={'/contact'} activeStyle={{color: 'rgb(255, 255, 245)', borderBottom: '1px solid rgb(255, 255, 245)'}}>
              Contact
            </StyledLink>
          </Option>
        </OptionBox>
      </HomeSection>
    </Content>
  )
}

const Content = styled.main` 
  display: flex;
  ${props => props.displayStatus && css`animation: ${slideUp2} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`}
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
`
const Logo = styled.img`
  height: 4rem;
  align-self: center;
  animation: ${shrink} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  &:hover{
    animation: ${enlarge} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    cursor: pointer;
    box-shadow: 0px 0px 32px 2px rgba(255,255,245,0);
  }
  @media (max-width: 640px) {
    height: 3rem;
  }
`
const OptionBox = styled.div`
  height: auto;
  width: auto;
  animation: ${slideIn} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000);
  ${props => props.currentLocation === '/home' &&
    css`animation: ${slideIn} ${props => props.duration + 's'} cubic-bezier(0.390, 0.575, 0.565, 1.000);`
  }
`
const HomeSection = styled.main`
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background-color: rgb(50, 50, 49, 0.9);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  animation: ${periodIn} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  ${props => props.currentLocation !== '/home' &&
    css`
      animation: ${slideUp} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
      border-radius: 0 0 1% 0;
      box-shadow: 1px -3px 40px 0px;
    `
  }
`
const StyledLogoLink = styled(NavLink)`
  font-size: 2em;
  color: rgb(255, 255, 245);
  text-decoration: none;
  ${props => props.currentLocation !== '/home' &&
  css`
    font-size: 1.2em;
  `
  }
  @media (max-width: 440px) {
    font-size: 0.7em;
  }
`
const Option = styled.h1`
  margin: 0;
  animation: ${shrink} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  &:hover {
    animation: ${enlarge} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    cursor: pointer;
  }
`
const StyledLink = styled(StyledLogoLink)`
  &:hover {
    color: rgb(255,255,245);
    border-bottom: 1px solid rgb(255, 255, 245);
  }
`

export default Home