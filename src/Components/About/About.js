import React from 'react'
import { enlarge, shrink } from '../../KeyFrames'
import styled from 'styled-components'
import aboutMain from '../../Assets/IMG_0590.jpeg'
import aboutSecond from '../../Assets/IMG_2573.jpeg'
import arrow from '../../Assets/arrow-down.png'
import facebook from '../../Assets/Facebook.png'
import linkedin from '../../Assets/Linkedin.png'
import github from '../../Assets/Github.png'

const About = () => {
  return (
    <ContentContainer>
        <ImgContainer img={aboutMain}>
            <Arrow src={arrow}/>
        </ImgContainer>
      <BioContainer>
        <Bio>
          <p><strong>Caleb Haizlett</strong> is a software developer currently residing in Denver, Colorado.</p>
        </Bio>
      </BioContainer>
      <ImgContainer img={aboutSecond}/>
      <Footer>
        <ThankYou>
          <p>Thank You for Visiting!</p>
        </ThankYou>
        <IconContainer>
          <Icon src={linkedin} onClick={() => window.open("https://www.linkedin.com/in/caleb-haizlett/", "_blank")}/>
          <Icon src={github} onClick={() => window.open("https://github.com/CHaiz15", "_blank")}/>
          <Icon src={facebook} onClick={() => window.open("https://www.facebook.com/caleb.haizlett", "_blank")}/>
        </IconContainer>
        <Info>
          <p>Created by: Caleb Haizlett</p>
          <p>Est. 2020</p>
        </Info>
      </Footer>
    </ContentContainer>
  )
}

const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 245);
  height: 100vh;
  position: relative;
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 1px;
  transform-style: preserve-3d;
`
const Bio = styled.div`
  align-self: center;
  width: 60%;
  font-size: 1.5rem;
  text-align: left;
  position: absolute;
  padding: 1rem;
  box-shadow: 0 0 20px rgb(255, 255, 245);
  top: 50%;
  left: 50%;
  transform: translateZ(-1px) scale(2) translate(-25%, -25%);
  z-index: 3;
  transform: translate(-50%, -50%);
  box-shadow: none;
`
const BioContainer = styled.section`
  background-color: rgb(255, 255, 245);
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  width: 100%;
  transform-style: inherit;
  box-shadow: 0 0 20px rgb(50, 50, 49);
  z-index: 1;
`
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  min-height: 100vh;
  width: 100%;
  transform-style: inherit;
  z-index: -1;
  &:before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    display: block;
    background: url(${props => props.img}) center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: translateZ(-1px) scale(2);
    height: 100vh;
    z-index: -2;
  }
`
const Arrow = styled.img`
  text-align: center;
  width: 3%;
  height: auto;
  padding: 0 0 1% 0;
`
const Footer= styled.div`
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
  -webkit-box-reflect: below 5px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(40%, transparent), to(rgba(255, 255, 255, 0.1)));
  
  &:hover {
    animation: ${enlarge} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    cursor: pointer;
    -webkit-box-reflect: below 5px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(40%, transparent), to(rgba(255, 255, 255, 0.1)));

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
  font-weight: bolder;
  color: rgb(255, 255, 245);
`
const ThankYou = styled.div`
  text-align: center;
  font-size: 1.5em;
  padding: 0 0 3% 0;
  font-weight: bold;
  color: rgb(255, 255, 245);
`

export default About