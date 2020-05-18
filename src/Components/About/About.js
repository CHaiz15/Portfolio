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
          </Welcome>
            <Arrow src={arrow}/>
        </ImgContainer>
      <BioContainer>
        <Bio>
          <p><strong>I am</strong> a software developer currently residing in Denver, Colorado. Following a childhood love for video games and technology; I dove into the world of software development. I fiddled around on various online courses, took a year of computer science at Slippery Rock University, and then honed my skills at Turing School of Software and Design.</p>
          <p>I have done work in software development, mobile app creation, graphic design, and front-end web development. I am drawn toward flawless design, that encompasses more than just the appearance. A quality product comes from a multi-step process that includes market research, technical research, design of a concept, well thought mockups, and detailed execution.</p>
          <p>In my time away from the screen I enjoy hockey, hiking, climbing, hammocking, and trail running in the beautiful state of Colorado. I'm always looking for my next adventure or new place to eat. Thank you for stopping by and if you like anything you see lets connect!</p>
        </Bio>
      </BioContainer>
      <ImgContainerTwo img={aboutSecond}/>
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
  @media (max-width: 640px) {
    font-size: 1.5em;
  }
  @media (max-width: 400px) {
    font-size: 1.2em;
  }
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
  object-fit: cover;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  min-height: 100%;
  width: 100%;
  transform-style: inherit;
  z-index: -1;
  &:before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    display: block;
    background: url(${props => props.img}) center / cover;
    background-repeat: no-repeat;
    transform: translateZ(-1px) scale(2);
    height: 100%;
    z-index: -2;
  }
`

const ImgContainerTwo = styled(ImgContainer)`
  @media (max-width: 640px) {
    background: url(${props => props.img}) right;
    background-size: cover;
    background-repeat: no-repeat;
  }
`

const Welcome = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 5% 0 0 0;
  @media (max-width: 440px) {
    height: 45%;
  }
  @media (max-width: 640px) {
    padding: 10% 0 0 0;
  }
`

const NameWrapper = styled.div`
  color: rgb(255, 255, 245);
  font-weight: bolder;
  font-size: 6em;
  @media (max-width: 640px) {
    font-size: 4em;
  }
  @media (max-width: 400px) {
    font-size: 2.5em;
  }
`

const Name = styled.p`
`

const Arrow = styled.img`
align-self: center;
  width: 2%;
  height: auto;
  padding: 0 0 1% 0;
  @media (max-width: 640px) {
    width: 4%;
  }
`

export default About