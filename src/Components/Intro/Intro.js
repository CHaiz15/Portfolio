import React, { useState } from 'react'
import styled from 'styled-components'
import { animatedCursor, animatedText, sonarEffect, slideIn, backgroundPan, fadeOut} from '../../KeyFrames'
import { Link } from 'react-router-dom'

const Intro = () => {
  const [cursorStatus, setCursorStatus] = useState(false)
  setTimeout(() => setCursorStatus(true), 2100)
  const [displayStatus, setDisplayStatus] = useState(true)
  setTimeout(() => setDisplayStatus(false), 3500)
  
  return (
    <Content>
      <Main>
      <NameBox>
        <Name cursorStatus={cursorStatus} displayStatus={displayStatus}>Caleb Haizlett</Name>
      </NameBox>
      <WelcomeContainer to='/home'>
        <WelcomeButton displayStatus={displayStatus}> 
            <Welcome>Welcome!</Welcome>
        </WelcomeButton>
      </WelcomeContainer>
      </Main>
    </Content>
  )
}

const WelcomeContainer = styled(Link)`
  animation: ${slideIn} 4s cubic-bezier(0.230, 1.000, 0.320, 1.000) 3.5s both;
  text-decoration: none;
`

const Welcome = styled.h1`  
  color: rgb(255, 255, 245);
  font-size: 3em;
  font-weight: bold;
`

const WelcomeButton = styled.div`
  display: flex;
  ${props => props.displayStatus && 'display: none;'}
  align-items: center;
  justify-content: center;
  height: 25rem;  
  width: 25rem;
  cursor: pointer;
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
    box-shadow: 0px 0px 32px 2px rgba(255,255,245,0);
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
  font-size: 7em;
  color: rgb(50, 50, 49);
  animation: ${animatedText('100%')} 2s steps(29,end) 1 normal both,
            ${animatedCursor} 400ms steps(29,end) infinite,
            ${fadeOut} 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) 3s both;
  ${props => !props.displayStatus && 'display: none;'}
  ${props => props.cursorStatus && 'border-right: hidden;'}
`
const NameBox = styled.div`
`

export default Intro