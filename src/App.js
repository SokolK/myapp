import React, {Component} from 'react'
import nav from './components/nav.js'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import blog from './components/blog/blog.js'
import Header from './components/header/header.js'
import Intro from './components/intro/intro.js'
import Inter from './components/interest/interest.js'
import Diam from './components/diamond/diam.js'
import Pro from './components/projects/projects.js'
import Cont from './components/contact/contact.js'


class App extends Component {
  render() {
  return (
    <BrowserRouter>    
      <div className='App'>
      <Header />
      <Intro />
      <Inter />
      <Diam />
      <Pro />
      <Cont />
        <Route path='/nav' component={nav} />
        <Route path='/blog' component={blog} />
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
