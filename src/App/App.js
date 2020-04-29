import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Projects from '../Components/Projects/Projects'
import Content from '../Components/Content/Content'
import Contact from '../Components/Contact/Contact'
import './App.scss'

const App = () => {
  return (
    <main className="App">
      <nav className='nav-bar'>
      </nav>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/content' component={Content} />
      <Route exact path='/contact' component={Contact} />
    </main>
  );
}

export default App
