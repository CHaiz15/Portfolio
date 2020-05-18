import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import code from '../../Assets/code.png'
import arrow from '../../Assets/arrow-down.png'
import Goals from './Goals'
import ProjectsHolder from './ProjectsHolder'

const Projects = () => {
  return (
    <ContentContainer>
      <ImgContainer img={code}>
        <Overview>
          <Welcome>
            <Greeting>
              <GreetingText>My code is...</GreetingText>
            </Greeting>
          </Welcome>
          <Goals/>
        <Arrow src={arrow}/>
        </Overview>
      </ImgContainer>
      <ProjectsHolder/>
      <Footer/>
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
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.img}) center / cover;
    background-repeat: no-repeat;
    transform: translateZ(-1px) scale(2);
    height: 100vh;
    z-index: -2;
`
const Overview = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
`
const Welcome = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: rgb(255, 255, 245);
  padding: 0 0 5% 0;
  @media (max-width: 900px) {
    padding: 0 0 15% 0;
  }
  @media (max-width: 600px) {
    padding: 0 0 30% 0;
  }
  @media (max-height: 650px) {
    padding: 20% 0 0 0;
  }
`
const Greeting = styled.div`
  font-weight: bolder;
  font-size: 4em;
  width: 100%;
  height: auto;
  @media (max-width: 400px) {
    font-size: 3em;
  }
`
const GreetingText = styled.p`
  margin: 0;
`
const Arrow = styled.img`
  width: 2%;
  height: auto;
  padding: 15% 0 1% 0;
  @media (max-width: 640px) {
    width: 4%;
  }
`

export default Projects