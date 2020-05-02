import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { periodIn, shrink, enlarge, slideUp, slideIn} from '../../KeyFrames'
import { NavLink } from 'react-router-dom'
import logo from '../../Assets/white-logo.png'
import { Link } from 'react-router-dom'

const Home = () => {
  const [homeStatus, setHomeStatus] = useState(true)

  return (
    <Content>
      <HomeSection homeStatus={homeStatus}>
        <OptionBox>
          <Option>
            <StyledLinkOne to={'/about'} activeStyle={{color: 'rgb(70, 170, 239)'}} onClick={() => setHomeStatus(false)}>
              About
            </StyledLinkOne>
          </Option>
        </OptionBox>
        <OptionBox1>
          <Option>
            <StyledLinkTwo to={'/projects'} activeStyle={{color: 'rgb(238, 54, 52)'}} onClick={() => setHomeStatus(false)}>
              Projects
            </StyledLinkTwo>
          </Option>
        </OptionBox1>
        <LogoBox>
        <Link to='/'>
          <Logo src={logo} />
        </Link>
        </LogoBox>
        <OptionBox2>
          <Option>
            <StyledLinkThree to={'/content'} activeStyle={{color: 'rgb(252, 231, 0)'}} onClick={() => setHomeStatus(false)}>
              Content
            </StyledLinkThree>
          </Option>  
        </OptionBox2>
        <OptionBox3>  
          <Option>
            <StyledLinkFour to={'/contact'} activeStyle={{color: 'rgb(92,213,4)'}} onClick={() => setHomeStatus(false)}>
              Contact
            </StyledLinkFour>
          </Option>
        </OptionBox3>
      </HomeSection>
    </Content>
  )
}

const Logo = styled.img`
  height: 4rem;
  align-self: center;
  padding: 30% 0 0 0;
  animation: ${shrink} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  &:hover{
    animation: ${enlarge} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    cursor: pointer;
    box-shadow: 0px 0px 32px 2px rgba(255,255,245,0);
  }
`
const LogoBox = styled.div`
  animation: ${slideIn} 3s cubic-bezier(0.390, 0.575, 0.565, 1.000)
`
const OptionBox = styled.div`
  animation: ${slideIn} 5s cubic-bezier(0.390, 0.575, 0.565, 1.000)
`
const OptionBox1 = styled.div`
  animation: ${slideIn} 4s cubic-bezier(0.390, 0.575, 0.565, 1.000)
`
const OptionBox2 = styled.div`
  animation: ${slideIn} 4s cubic-bezier(0.390, 0.575, 0.565, 1.000)
`
const OptionBox3 = styled.div`
  animation: ${slideIn} 5s cubic-bezier(0.390, 0.575, 0.565, 1.000)
`
const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`
const HomeSection = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: rgb(50, 50, 49);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  animation: ${periodIn} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  ${props => props.homeStatus ? 
    '':
    css`
    animation: ${slideUp} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    border-radius: 0 0 100% 100%/30%;
    box-shadow: 1px -3px 40px 0px;
    padding: 0 0 3% 0;
    `
  }
`
const StyledLink = styled(NavLink)`
  font-size: 1.25em;
  color: rgb(255, 255, 245);
  text-decoration: none;
`
const Option = styled.h1`
  -webkit-box-reflect: below 5px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(40%, transparent), to(rgba(255, 255, 255, 0.1)));
  animation: ${shrink} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  &:hover {
    animation: ${enlarge} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    cursor: pointer;
    -webkit-box-reflect: below 5px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(40%, transparent), to(rgba(255, 255, 255, 0.15)));
}
`
const StyledLinkOne = styled(StyledLink)`
  &:hover {
    color: rgb(70, 170, 239);
}
`
const StyledLinkTwo = styled(StyledLink)`
  &:hover {
    color: rgb(238, 54, 52);
}
`
const StyledLinkThree = styled(StyledLink)`
  &:hover {
    color: rgb(252, 231, 0);
}
`
const StyledLinkFour = styled(StyledLink)`
  &:hover {
    color: rgb(92,213,4);
}
`

export default Home