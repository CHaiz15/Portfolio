import React, { useState } from 'react'
import styled from 'styled-components'
import { periodIn, fadeIn, shrink, enlarge} from '../../KeyFrames'
import { NavLink } from 'react-router-dom'
import logo from '../../Assets/white-logo.png'
import { Link } from 'react-router-dom'

const Home = () => {
  const [] = useState()
  return (
    <Content>
      <HomeSection>
        <OptionBox>
          <Option>
            <StyledLinkOne to={'/about'} activeStyle={{color: 'rgb(70, 170, 239)'}}>
              About
            </StyledLinkOne>
          </Option>
        </OptionBox>
        <OptionBox1>
          <Option>
            <StyledLinkTwo to={'/projects'} activeStyle={{color: 'rgb(238, 54, 52)'}}>
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
            <StyledLinkThree to={'/content'} activeStyle={{color: 'rgb(252, 231, 0)'}}>
              Content
            </StyledLinkThree>
          </Option>  
        </OptionBox2>
        <OptionBox3>  
          <Option>
            <StyledLinkFour to={'/contact'} activeStyle={{color: 'rgb(255, 255, 245)'}}>
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
  animation: ${fadeIn} 6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`
const OptionBox = styled.div`
  animation: ${fadeIn} 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`
const OptionBox1 = styled.div`
  animation: ${fadeIn} 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`
const OptionBox2 = styled.div`
  animation: ${fadeIn} 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`
const OptionBox3 = styled.div`
  animation: ${fadeIn} 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`
const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: rgb(70, 170, 239);
  background-color: rgb(255, 255, 245);
  position: absolute;
`
const HomeSection = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: rgb(50, 50, 49);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  animation: ${periodIn} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  align-items: center;
  // border-radius: 0 0 100% 100%/30%;
  // box-shadow: 1px -3px 40px 0px;
`
const StyledLink = styled(NavLink)`
  color: rgb(255, 255, 245);
  text-decoration: none;
  &:hover {
    color: rgb(70, 170, 239);
  }
`
const Option = styled.h1`
  font-size: 3em;
  -webkit-box-reflect: below 5px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(40%, transparent), to(rgba(255, 255, 255, 0.1)));
  animation: ${shrink} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  &:hover{
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
    color: rgb(255, 255, 245);
  }
`

export default Home