import React from 'react'
import styled from 'styled-components'
import { animatedCursor, animatedText, animatedCursor2, animatedText2, periodExit, sonarEffect, slideIn} from '../../KeyFrames'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <Content>
      <Main>
      <NameBox>
        <Name>Caleb Haizlett<Splash>.</Splash></Name>
        <Career>Software Developer<Splash>.</Splash></Career>
      </NameBox>
      <WelcomeContainer 
        to='/home'
      >
        <WelcomeButton>
          <Welcome>Welcome!</Welcome>
        </WelcomeButton>
      </WelcomeContainer>
      </Main>
    </Content>
  )
}

const WelcomeContainer = styled(Link)`
  animation: ${slideIn} 3s cubic-bezier(0.230, 1.000, 0.320, 1.000) 5s both;
  text-decoration: none;
`

const Welcome = styled.h1`  
  color: rgb(255, 255, 245);
`

const WelcomeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;  
  width: 15rem;
  cursor: pointer;
  margin: 0 0 30% 0;
  border-radius: 50%;
  color: #fff;
  background: rgb(50, 50, 49);
  transition: transform ease-out 0.1s, background 0.2s;

  &:after {
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    content: '';
    box-sizing: content-box;
    box-shadow: 0 0 0 2px rgb(50, 50, 49);
    opacity: 0;
    transform: scale(0.9);
  }
  
  &:hover {
    background: rgb(50, 50, 49);
    transform: scale(0.93);
    color: #fff;
  }
  
  &:hover:after {
    animation: ${sonarEffect} 1.3s ease-out 75ms;
  }
  &:active {
    animation: ${periodExit} 0.7s ease-in 6.5s both;
  }
`
const Content = styled.main `
  display: flex;
  justify-content: center;
  align-items: center;
`
const Main = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: rgb(255, 255, 245);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Name = styled.h1`
  border-right: solid 3px rgba(0,255,0,.75);
  white-space: nowrap;
  overflow: hidden;    
  font-size: 6em;
  color: rgb(50, 50, 49);
  margin: 10% auto auto; 
  animation: ${animatedText} 4s steps(29,end) 1s 1 normal both,
            ${animatedCursor} 600ms steps(29,end) infinite;
`
const Career = styled.h1`
  border-right: solid 3px rgba(0,255,0,.75);
  white-space: nowrap;
  overflow: hidden;    
  font-size: 3em;
  color: rgb(50, 50, 49);
  margin: 10% auto auto; 
  animation: ${animatedText2} 4s steps(29,end) 1s 1 normal both,
            ${animatedCursor2} 600ms steps(29,end) infinite;
`
const NameBox = styled.div`
  padding: 0% 0% 10% 0%;
`
const Splash = styled.span`
  height: 100%;
  display: inline-block;
  // animation: ${periodExit} 0.7s ease-in 6.5s both;
`

export default Intro