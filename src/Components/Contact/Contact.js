import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <ContentContainer>
      <div>Currently in progress.</div>
      <div>In the meantime contact me at caleb.haizlett@gmail.com</div>
      <div>Thanks!</div>
    </ContentContainer>
  )
}

const ContentContainer = styled.main`
  background-color: rgb(50, 50, 49);
  flex-direction: column;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  color: rgb(255,255,245);
`

export default Contact