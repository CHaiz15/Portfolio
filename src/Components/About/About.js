import React from 'react'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import aboutMain from '../../Assets/IMG_0590.jpeg'
import aboutSecond from '../../Assets/IMG_2573.jpeg'
import arrow from '../../Assets/arrow-down.png'

const About = () => {
  return (
    <ContentContainer>
        <ImgContainer img={aboutMain}>
          <Welcome>
            <NameWrapper>
              <Name>Caleb Haizlett</Name>
            </NameWrapper>
            <Arrow src={arrow}/>
          </Welcome>
        </ImgContainer>
      <BioContainer>
        <Bio>
          <p><strong>I am</strong> a software developer currently residing in Denver, Colorado. Following a childhood love for video games and technology; I dove into the world of software development. I fiddled around on various online courses, took a year of computer science at Slippery Rock University, and then honed my skills at Turing School of Software and Design.</p>
          <p>I have done work in software development, mobile app creation, graphic design, and front-end web development. I am drawn toward flawless design, that encompasses more than just the appearence. It is a multi-step process that includes market research, technical research, design of a concept, and well thought mockups.</p>
          <p style={{textAlign: 'center'}}>Thank you for stopping by and please enjoy what you see!</p>
        </Bio>
      </BioContainer>
      <ImgContainer img={aboutSecond}/>
      <Footer />
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
  width: 70%;
  font-size: 2em;
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
const Welcome = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`
const NameWrapper = styled.div`
  color: rgb(255, 255, 245);
  font-weight: bolder;
  font-size: 6em;
`
const Name = styled.p`
  margin: 0;
`
const Arrow = styled.img`
  width: 2%;
  height: auto;
  padding: 0 0 1% 0;
`

export default About