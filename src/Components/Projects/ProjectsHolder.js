import React, { useState } from 'react'
import styled from 'styled-components'
import ateball from '../../Assets/mock-ateball.png'
import superteam from '../../Assets/superteam.png'
import blucifer from '../../Assets/blucifer.png'
import react from '../../Assets/react.png'
import redux from '../../Assets/redux.png'
import cypress from '../../Assets/cypress.png'
import jest from '../../Assets/jest.png'

const ProjectsHolder = () => {
  return (
    <>
      <Content>
        <Project>
          <TitleWrapper>
            <Title>
              Hangry Ateball
            </Title>
          </TitleWrapper>
          <Description>
            <TechTitle>Overview</TechTitle>
             <Text>Can’t figure out where to eat? Shake the magic “ateball” for a restaurant recommendation and let all your friends know where to meet you with a text notification.</Text>
          </Description>
        </Project>
        <Details>
          <ImgWrapper>
            <ClickMe>
              <p>Github</p>
            </ClickMe>
            <Img onClick={() => window.open("https://github.com/hangry-ateball/hangry-ateball-fe", "_blank")} src={ateball}/>
          </ImgWrapper>
          <TechStack>
            <TechTitle>Stack</TechTitle>
            <Technologies>
              <Tech><TechIcon src={react}/>React Native</Tech>
              <Tech><TechIcon src={cypress}/>Cypress</Tech>
            </Technologies>
          </TechStack>
        </Details>
      </Content>
      <ContentTwo>
        <Details>
          <ImgWrapper>
            <ClickMe style={{color: 'rgb(255, 255, 245)'}}>
              <p>Github</p>
            </ClickMe>
            <Img onClick={() => window.open("https://github.com/CHaiz15/blucifer0.1", "_blank")} src={blucifer} style={{boxShadow: '0 0 20px rgba(255,255,245,0.8)'}}/>
          </ImgWrapper>
          <TechStack style={{color: 'rgb(255, 255, 245)'}}>
            <TechTitle style={{color: 'rgb(255, 255, 245)'}}>Stack</TechTitle>
            <Technologies>
              <Tech><TechIcon src={react}/>React</Tech>
              <Tech><TechIcon src={jest}/>Jest/Enzyme</Tech>
            </Technologies>
          </TechStack>
        </Details>
        <Project>
          <TitleWrapper>
            <Title style={{color: 'rgb(255, 255, 245)'}}>
              Blucifer BnB
            </Title>
          </TitleWrapper>
          <Description style={{color: 'rgb(255, 255, 245)'}}>
            <TechTitle style={{color: 'rgb(255, 255, 245)'}}>Overview</TechTitle>
              <Text>Blucifer BnB utilizes an external API that houses data associated with rentals available in the Denver area. Users are able to view rental listings details as well as favorite them.</Text>
          </Description>
        </Project>
      </ContentTwo>
      <Content>
        <Project>
          <TitleWrapper>
            <Title>
              Super Team Creator
            </Title>
          </TitleWrapper>
          <Description>
            <TechTitle>Overview</TechTitle>
              <Text>We were given two hours to find an api and come up with an idea to make an application using it. I stumbled upon the superhero api and decided to create a fun application designed to allow a user to create teams of superheros/villians and checkout what their combined stats would be!</Text>
          </Description>
        </Project>
        <Details>
          <ImgWrapper>
            <ClickMe>
              <p>Github</p>
            </ClickMe>
            <Img onClick={() => window.open("https://github.com/CHaiz15/super-team-creator", "_blank")} src={superteam}/>
          </ImgWrapper>
          <TechStack>
            <TechTitle>Stack</TechTitle>
            <Technologies>
              <Tech><TechIcon src={react}/>React</Tech>
              <Tech><TechIcon src={redux}/>Redux</Tech>
              <Tech><TechIcon src={jest}/>Jest/Enzyme</Tech>
            </Technologies>
          </TechStack>
        </Details>
      </Content>
    </>
  )
} 

const Content = styled.div`
  background-color: rgb(255, 255, 245);
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  transform-style: inherit;
  box-shadow: 0 0 20px rgb(50, 50, 49);
  z-index: -1;
`

const ContentTwo = styled(Content)`
  background-color: rgb(50, 50, 49);
  box-shadow: 0 0 20px rgb(255, 255, 245);
`

const Project = styled.div` 
  width: 40%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

const TitleWrapper = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h3`
  color: rgb(255, 255, 245);
  color: rgb(50, 50, 49);
  font-size: 7em;
  text-align: center;
`

const ImgWrapper = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  position:relative;
  box-shadow: 0 0 30px rgba(50,50,49,0.8);
  &:hover {
    opacity: 0.3;
    cursor: pointer;
  }
`

const ClickMe = styled.div`
  position: absolute;
  display: none;
  height: 20%;
  width: 20%;
  color: rgb(50, 50, 49);
  font-size: 4em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Details = styled.div`
  height: 80%;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const TechStack = styled.div`
  width: 100%;
  height: 40%;
  text-align: left;
  color: rgb(50, 50, 49);
  font-size: 1.5em;
`

const Technologies = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const TechTitle = styled.h3`
  color: rgb(50, 50, 49);
  font-size: 2em;
  font-weight: bolder;
`

const TechIcon = styled.img`
  width: 5%;
  height: auto;
  margin: 1%;
`

const Description = styled.div`
  width: 100%;
  height: 40%;
  text-align: left;
  color: rgb(50, 50, 49);
  font-size: 1.5em;
`

const Text = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  text-align: left;  
  vertical-align: center;
  font-weight: 500;
`

const Tech = styled(Text)`
  font-weight: bolder;
`

export default ProjectsHolder