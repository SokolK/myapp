import React, {Component} from 'react'
import nav from './components/nav'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import blog from './components/blog'


function App() {
  return (
    <BrowserRouter>    
      <div className='App'>
        <nav />
        <Route path='/blog' component={blog} />
        <Route path='/nav' component={nav} /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
