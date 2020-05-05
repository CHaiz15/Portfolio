import React from 'react'
import styled, { css } from 'styled-components'
import { periodIn, shrink, enlarge, slideUp, slideIn} from '../../KeyFrames'
import { NavLink } from 'react-router-dom'
import logo from '../../Assets/white-logo.png'
import { useLocation } from 'react-router-dom'


const Home = () => {
  const location = useLocation();

  return (
    <Content>
      <HomeSection currentLocation={location.pathname}>
        <OptionBox duration={5} currentLocation={location.pathname}>
          <Option>
            <StyledLinkOne to={'/about'} activeStyle={{color: 'rgb(70, 170, 239)'}}>
              About
            </StyledLinkOne>
          </Option>
        </OptionBox>
        <OptionBox duration={4} currentLocation={location.pathname}>
          <Option>
            <StyledLinkTwo to={'/projects'} activeStyle={{color: 'rgb(238, 54, 52)'}}>
              Projects
            </StyledLinkTwo>
          </Option>
        </OptionBox>
        <OptionBox duration={3} currentLocation={location.pathname}>
        <StyledLink to='/'>
          <Logo src={logo} />
        </StyledLink>
        </OptionBox>
        <OptionBox duration={4} currentLocation={location.pathname}>
          <Option>
            <StyledLinkThree to={'/content'} activeStyle={{color: 'rgb(252, 231, 0)'}}>
              Content
            </StyledLinkThree>
          </Option>  
        </OptionBox>
        <OptionBox duration={5} currentLocation={location.pathname}>  
          <Option>
            <StyledLinkFour to={'/contact'} activeStyle={{color: 'rgb(92,213,4)'}}>
              Contact
            </StyledLinkFour>
          </Option>
        </OptionBox>
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
const OptionBox = styled.div`
  animation: ${slideIn} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000);
  ${props => props.currentLocation === '/home' &&
    css`animation: ${slideIn} ${props => props.duration + 's'} cubic-bezier(0.390, 0.575, 0.565, 1.000);`
  }
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
  ${props => props.currentLocation !== '/home' &&
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