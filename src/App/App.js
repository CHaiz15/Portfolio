import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from '../Components/Intro/Intro'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Projects from '../Components/Projects/Projects'
import Content from '../Components/Content/Content'
import Contact from '../Components/Contact/Contact'
import styled from 'styled-components'


const App = () => {
  
  return (
    <Router>
      <Main>
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about'>
            <Home/>
            <About/>
          </Route>
          <Route exact path='/projects'>
            <Home/>
            <Projects/>
          </Route>
          <Route exact path='/content'>
            <Home/>
            <Content/>
          </Route>
          <Route exact path='/contact' component={Contact}>
            <Home/>
            <Contact/>
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

const Main = styled.main`
  height: 100%;
  width: 100%;
`

export default App
