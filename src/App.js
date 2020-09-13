import React, {Component} from 'react'
import Nav from './nav.js'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Blog from './blog.js'


class App extends Component {
  render() {
  return (
    <BrowserRouter>    
      <div className='App'>
        <div className="nav">

        </div>
        <Route path='/nav' component={Nav} />
        <Route path='/blog' component={Blog} />
        
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
