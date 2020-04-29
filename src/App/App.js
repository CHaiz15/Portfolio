import React from 'react'
import { Route } from 'react-router-dom'
import Nav from '../Components/Nav/Nav'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Projects from '../Components/Projects/Projects'
import Content from '../Components/Content/Content'
import Contact from '../Components/Contact/Contact'
import styled from 'styled-components'

const App = () => {
  return (
    <main className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About}>
        <Nav />
        <About />
      </Route>
      <Route exact path='/projects' component={Projects}>
        <Nav />
        <Projects />
      </Route>
      <Route exact path='/content' component={Content}>
        <Nav />
        <Content />
      </Route>
      <Route exact path='/contact' component={Contact}>
        <Nav />
        <Contact />
      </Route>
    </main>
  );
}

export default App
