import React, { useState } from 'react'
import styled from 'styled-components'
import { animatedCursor, animatedText, sonarEffect, slideIn, backgroundPan} from '../../KeyFrames'
import { Link } from 'react-router-dom'

const Intro = () => {
  const [cursorStatus, setCursorStatus] = useState(false)
  setTimeout(() => setCursorStatus(true), 4100)
  const [cursorStatus2, setCursorStatus2] = useState(false)
  setTimeout(() => setCursorStatus2(true), 7100)
  
  return (
    <Content>
      <Main>
      <NameBox>
        <Name cursorStatus={cursorStatus}>Caleb Haizlett<Splash>.</Splash></Name>
        <Career cursorStatus={cursorStatus2}>Software Developer<Splash>.</Splash></Career>
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
  animation: ${slideIn} 4s cubic-bezier(0.230, 1.000, 0.320, 1.000) 7s both;
  text-decoration: none;
`

const Welcome = styled.h1`  
  color: rgb(255, 255, 245);
  font-size: 3em;
  font-weight: bold;
`

const WelcomeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 17rem;  
  width: 17rem;
  cursor: pointer;
  margin: 0 0 30% 0;
  border-radius: 50%;
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
    transform: scale(0.93);
    animation: ${backgroundPan} 5s linear infinite alternate both;
  }
  &:hover:after {
    animation: ${sonarEffect} 1.3s ease-out 75ms;
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
  animation: ${animatedText('100%')} 3s steps(29,end) 1s 1 normal both,
            ${animatedCursor} 600ms steps(29,end) infinite;
  ${props => props.cursorStatus && 'border-right: hidden;'}
`
const Career = styled.h1`
  border-right: solid 3px rgba(0,255,0,.75);
  white-space: nowrap;
  overflow: hidden;    
  font-size: 3em;
  color: rgb(50, 50, 49);
  margin: 10% auto auto; 
  animation: ${animatedText('72%')} 3s steps(29,end) 4s 1 normal both,
            ${animatedCursor} 600ms steps(29,end) infinite;
  ${props => props.cursorStatus && 'border-right: hidden;'}
`
const NameBox = styled.div`
  padding: 0% 0% 10% 0%;
`
const Splash = styled.span`
  height: 100%;
  display: inline-block;
`

export default Intro