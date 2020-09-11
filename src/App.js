import React, {Component} from 'react'
import nav from './components/nav.js'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import blog from './components/blog/blog.js'
import Header from './components/header/header.js'
import Intro from './components/intro/intro.js'


class App extends Component {
  render() {
  return (
    <BrowserRouter>    
      <div className='App'>
      <Header />
      <Intro />
        <Route path='/blog' component={blog} />
        <Route path='/nav' component={nav} />
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
