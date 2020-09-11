import React from 'react'

const Header = () => {
    return(
    <div className="Header">
        <header className="App-background">
            <a href="#wst"><div className="O_mnie"> O mnie </div></a>
            <a href="#zaint"><div className="Zainteresowania"> Zainteresowania </div></a>
            <a href="#pro"><div className="projekty"> Projekty </div></a>
            <a href="#kont"><div className="kontakt"> Kontakt </div></a>
            <a href='/blog'><div className="blog"> Blog </div></a>
        </header>
    </div>
    )
}

export default Header