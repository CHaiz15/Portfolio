import React from 'react'
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
          <ImgWrapper>
            <ClickMe>
              <p>Github</p>
            </ClickMe>
            <Img onClick={() => window.open("https://github.com/hangry-ateball/hangry-ateball-fe", "_blank")} src={ateball}/>
          </ImgWrapper>
        </Project>
        <Details>
          <Description>
            <TechTitle>Overview</TechTitle>
             <Text>Can’t figure out where to eat? Shake the magic “ateball” for a restaurant recommendation and let all your friends know where to meet you with a text notification.</Text>
          </Description>
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
        <Project>
          <TitleWrapper>
            <Title style={{color: 'rgb(255, 255, 245)'}}>
              Blucifer BnB
            </Title>
          </TitleWrapper>
          <ImgWrapper>
            <ClickMe style={{color: 'rgb(255, 255, 245)'}}>
              <p>Github</p>
            </ClickMe>
            <Img onClick={() => window.open("https://github.com/CHaiz15/blucifer0.1", "_blank")} src={blucifer} style={{boxShadow: '0 0 20px rgba(255,255,245,0.8)'}}/>
          </ImgWrapper>
        </Project>
        <Details>
          <Description style={{color: 'rgb(255, 255, 245)'}}>
            <TechTitle style={{color: 'rgb(255, 255, 245)'}}>Overview</TechTitle>
              <Text>Blucifer BnB utilizes an external API that houses data associated with rentals available in the Denver area. Users are able to view rental listings details as well as favorite them.</Text>
          </Description>
          <TechStack style={{color: 'rgb(255, 255, 245)'}}>
            <TechTitle style={{color: 'rgb(255, 255, 245)'}}>Stack</TechTitle>
            <Technologies>
              <Tech><TechIcon src={react}/>React</Tech>
              <Tech><TechIcon src={jest}/>Jest/Enzyme</Tech>
            </Technologies>
          </TechStack>
        </Details>
      </ContentTwo>
      <Content>
        <Project>
          <TitleWrapper>
            <Title>
              Super Team Creator
            </Title>
          </TitleWrapper>
          <ImgWrapper>
            <ClickMe>
              <p>Github</p>
            </ClickMe>
            <Img onClick={() => window.open("https://github.com/CHaiz15/super-team-creator", "_blank")} src={superteam}/>
          </ImgWrapper>
        </Project>
        <Details>
          <Description>
            <TechTitle>Overview</TechTitle>
              <Text>I stumbled upon the superhero api and decided to create a fun application designed to allow a user to create teams of superheros/villians and checkout what their combined stats would be!</Text>
          </Description>
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
  position: relative;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  transform-style: preserve-3d;
  box-shadow: 0 0 20px rgb(50, 50, 49);
  perspective: 1px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const ContentTwo = styled(Content)`
  background-color: rgb(50, 50, 49);
  box-shadow: 0 0 20px rgb(255, 255, 245);
`

const Project = styled.div` 
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 1000px) {
    width: 80%;
    height: 60%;
    justify-content: space-around;
  }
  @media (max-width: 500px) {
    justify-content: space-evenly;
  }
`

const TitleWrapper = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    height: 20%;
    margin: 5%;
  }
`

const Title = styled.h3`
  color: rgb(255, 255, 245);
  color: rgb(50, 50, 49);
  font-size: 6em;
  text-align: center;
  margin: 0;
  @media (max-width: 1000px) {
    font-size: 4.5em;
  }
  @media (max-width: 640px) {
    font-size: 4em;
  }
  @media (max-width: 500px) {
    font-size: 3.5em;
  }
`

const ImgWrapper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 85%;
    height: 60%;
  }
  @media (max-width: 640px) {
    height: 60%;
  }
  @media (max-width: 500px) {
    height: 50%;
  }
`

const Img = styled.img`
  position: relative;
  object-fit: cover;
  width: 90%;
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
  width: 35%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
    justify-content: space-evenly;
    height: 30%;
    width: 80%;
  }
  @media (max-width: 700px) {
    justify-content: space-between;
  }
`

const TechStack = styled.div`
  width: 80%;
  height: 50%;
  color: rgb(50, 50, 49);
  font-size: 1.5em;
  @media (max-width: 1100px) {
    font-size: 1.3em;
  }
  @media (max-width: 1000px) {
    height: 30%;
  }
`

const Technologies = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const TechTitle = styled.h3`
  color: rgb(50, 50, 49);
  font-size: 2em;
  font-weight: bolder;
  text-align: center;
  margin: 10%;
  @media (max-width: 1000px) {
    margin: 2%;
  }
  @media (max-width: 640px) {
    font-size: 1.5em;
  }
`

const TechIcon = styled.img`
  width: 30px;
  height: auto;
  margin: 1%;
`

const Description = styled.div`
  width: 80%;
  height: 50%;
  color: rgb(50, 50, 49);
  font-size: 1.5em;
  @media (max-width: 1100px) {
    font-size: 1.3em;
  }
  @media (max-width: 1000px) {
    height: 45%;
  }
`

const Text = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;  
  font-weight: 500;
  @media (max-width: 1000px) {
    text-align: center;
  }
`

const Tech = styled(Text)`
  font-weight: bold;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`

export default ProjectsHolder