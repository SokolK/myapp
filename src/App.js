import React, {Component} from 'react'
import Nav from './components/nav/nav.js'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Blog from './components/blog/blog.js'
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
        <div className="nav">
          <Header />
          <Intro />
          <Inter />
          <Diam />
          <Pro />
          <Cont />
        </div>
        <Route path='/nav' component={Nav} />
        <Route path='/blog' component={Blog} />
        
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
