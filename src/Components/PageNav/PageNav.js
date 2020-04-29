import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const PageTab = ({ tabName, path }) => {

let borderColors = ['rgb(238, 54, 52)', 'rgb(70, 170, 239)', 'rgb(252, 231, 0)']

  return (
    <List>
      <StyledLink 
        exact
        to={path}
        activeStyle={{
          color: 'rgb(50, 50, 49)',
          paddingBottom: '10px',
          borderBottom: '3px solid',
          borderColor: `${borderColors[Math.floor(Math.random()*borderColors.length)]}`,
        }}
      >{tabName}</StyledLink>
    </List> 
  )
}

const List = styled.li`
  list-style-type: none;
`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 1.5em;
  padding: 10px;
  margin: 10px;
`


export default PageTab