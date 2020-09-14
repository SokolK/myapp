import React, {Component} from 'react'
import Nav from './nav.js'
import './App.css'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Blog from './blog.js'


class App extends Component {
  render() {
  return (
    <BrowserRouter>    
      <div className='App'>
        <Route path='/nav' component={Nav} />
        <Route path='/blog' component={Blog} />
        <Route exact path="/">
          <Redirect to="/nav" />
        </Route>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
