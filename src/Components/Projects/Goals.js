import React from 'react'
import styled from 'styled-components'
import lighbulb from '../../Assets/lightbulb.png'
import magnify from '../../Assets/magnify.png'
import eye from '../../Assets/eye2.png'
import arrows from '../../Assets/arrows.png'

const Goals = () => {
  return(
      <Content>
      <GoalContainer>
        <IconContainer>
          <GoalWrapper>
            <GoalIcon src={lighbulb}/>
          </GoalWrapper>
        </IconContainer>
          <GoalTitle>Empathetic</GoalTitle> 
          <Description>Readable, reausable, and squeaky clean, is my top priority.</Description>
      </GoalContainer>
      <GoalContainer>
        <IconContainer>
        <GoalWrapper>
          <GoalIcon src={eye} style={{height: '42%'}}/>
        </GoalWrapper>
        </IconContainer>
          <GoalTitle>Intuitive</GoalTitle> 
          <Description>Passion for clean, efficient, and easy to use UX/UI.</Description>
      </GoalContainer>
      <GoalContainer>
        <IconContainer>
        <GoalWrapper>
          <GoalIcon src={magnify}/>
        </GoalWrapper>
        </IconContainer>
          <GoalTitle>Dynamic</GoalTitle>
          <Description>Not every application has to look the same. I love trying new ideas.</Description>
      </GoalContainer>
      <GoalContainer>
        <IconContainer>
        <GoalWrapper>
          <GoalIcon src={arrows}/>
        </GoalWrapper>
        </IconContainer>
          <GoalTitle>Optimized</GoalTitle>
          <Description>Continually sharpening the tools to create responsive content.</Description>
      </GoalContainer>
    </Content>
  )
}

const Content = styled.div`
  height: 300px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

const IconContainer = styled.div`
  height: 40%
  width: auto;
`

const GoalContainer = styled.div`
  width: 25%;
  height: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const GoalWrapper = styled.div`
  background-color: rgb(255, 255, 245);
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const GoalIcon = styled.img`
  height: 50%;
  width: auto;
`
const GoalTitle = styled.h3`
  height: 15%;
  color: rgb(255, 255, 245);
  text-align: center;
  font-size: 1.8em;
`
const Description = styled.div`
  height: 45%;
  text-align: center;
  color: rgb(255, 255, 245);
  width: 80%;
  font-size: 1.5em;
`

export default Goals