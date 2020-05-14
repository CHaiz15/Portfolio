import React from 'react'
import styled from 'styled-components'
import { enlarge, shrink } from '../../KeyFrames'
import facebook from '../../Assets/Facebook.png'
import linkedin from '../../Assets/Linkedin.png'
import github from '../../Assets/Github.png'

const Footer = () => {
  return(
    <Content>
      <ThankYou>
        <p>Thank You for Visiting!</p>
      </ThankYou>
      <IconContainer>
        <Icon src={linkedin} onClick={() => window.open("https://www.linkedin.com/in/caleb-haizlett/", "_blank")}/>
        <Icon src={github} onClick={() => window.open("https://github.com/CHaiz15", "_blank")}/>
        <Icon src={facebook} onClick={() => window.open("https://www.facebook.com/caleb.haizlett", "_blank")}/>
      </IconContainer>
      <Info>
        <p>© Caleb Haizlett 2020</p>
      </Info>
    </Content>
  )
}

const Content = styled.div`
  box-shadow: 0 0 10px rgb(50, 50, 49);
  background-color: rgb(50, 50, 49);
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 50vh;
  width: 100%;
  transform-style: inherit;
  z-index: 1;
`
const IconContainer = styled.footer`
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 20%;
  width: 40%;
`
const Icon = styled.img`
  height: 80%;
  width: auto;
  animation: ${shrink} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  &:hover {
    animation: ${enlarge} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    cursor: pointer;
    // -webkit-box-reflect: below 5px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(40%, transparent), to(rgba(255, 255, 255, 0.1)));
  }
  @media (max-width: 640px) {
    margin: 10%;
  }
`
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 3% 0 0 0;
  align-self: center;
  width: 80%;
  height: auto;
  font-weight: bold;
  color: rgb(255, 255, 245);
`
const ThankYou = styled.div`
  text-align: center;
  font-size: 1.5em;
  padding: 0 0 3% 0;
  font-weight: bold;
  color: rgb(255, 255, 245);
`

export default Footer