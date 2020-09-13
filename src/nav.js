import React from 'react'
import Header from './components/header/header.js'
import Intro from './components/intro/intro.js'
import Inter from './components/interest/interest.js'
import Diam from './components/diamond/diam.js'
import Pro from './components/projects/projects.js'
import Cont from './components/contact/contact.js'




const Nav = () => {
  return (
    <div className='con'>
      <Header />
      <Intro />
      <Inter />
      <Diam />
      <Pro />
      <Cont />

    </div>
  )
}

export default Nav