import React from "react";
import './Header.css';
import smallRight from '../img/small-right.png';
import smallLeft from '../img/small-left.png';
import search from '../img/search.png'

const Header = () => {
    return (

        <nav className="header_navigation">

                <div className="navigation">

                    <button className="arrow-left">

                        <img src={smallLeft} alt="Seta esquerda"/>

                    </button>

                    <button className="arrow-right">

                        <img src={smallRight} alt="Seta direita"/>

                    </button>

                </div>

                    <div className="header_search">

                        <img src={search} alt="Buscar"/>

                        <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?"/>

                    </div>

                    <div className="header_login">

                        <button className="subscribe">Inscreva-se</button>

                        <button className="login">Entrar</button>

                    </div>

        </nav>
    )
};

export default Header;