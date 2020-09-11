import React from 'react'
import Header from './header/header'


const nav = () => {
  return (
    <div className='con'>
        <Header />

          
          <div className="zaint" id="zaint">
          <p>Zainteresowania:</p>
            <ul>
                <li>Koszykówka</li>
                <li>Motoryzacja</li>
                <li>Programowanie</li>
                <li>Jedzenie</li>
                <li>Psychologia</li>
            </ul>
          </div>
          <div id="diamond-shield">
          </div>
          <div className="pro" id="pro">
            <p>Projekty</p>
            <ul>
                <li>Slav bros(projekt czasowo anulowany)</li>
                <li>*Zbudowanie Optimusa Prime</li>
                <li>*Zbudowanie rakiety na Marsa</li>
                <li>*Polecenie na Marsa</li>
            </ul>
            <p>*Nie do końca prawda</p>
          </div>
          <div className="kont" id="kont">
          <p>Kontakt</p>
            <ul>
                <li>E-mail: xyz@gmail.com</li>
                <li>numer: 666666666</li>
            </ul>
          </div>
    </div>
  )
}

export default nav