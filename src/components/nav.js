import React from 'react'


const nav = () => {
  return (
    <div className='con'>
      <header className="App-background">
          <a href="#wst"><div className="O_mnie"> O mnie </div></a>
          <a href="#zaint"><div className="Zainteresowania"> Zainteresowania </div></a>
          <a href="#pro"><div className="projekty"> Projekty </div></a>
          <a href="#kont"><div className="kontakt"> Kontakt </div></a>
          <a href="/blog"><div className="blog"> Blog </div></a>
        </header>
          <h1 className="wiz">Wizytówka</h1>
          <div className="wst" id="wst">
            <p>Nazywam się Jakub Sokołowski, moje główne zajęcia w trakcie dnia to siedzenie w szkole.
              Ocenki zawsze były przyzwoite więc nigdy wybitnie nie musiałem poświęcać swojego wolnego czasu na nadrabianie zaległości.
              W wolnym czasie oprócz typowego odpoczynku lub spotykania się ze znajomymi, ćwiczę swoje umiejętności z zakresu programowania oraz mowy po Angielsku.
              Z faktu siedzenia przy komputerze wielu godzin, zawsze staram się znaleźć czas na siłownię dla zdrowia fizycznego oraz psychicznego.</p>
          </div>
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