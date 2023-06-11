import React from 'react';
import './Header.css';

export default () => {
    return (
        <header>
            <div>
                <a href="/">
                    <img src="https://webmail.kinghost.com.br/img/logo-king.svg" alt="king" height="32"/>
                </a>
            </div>
            <div className="nav">
                <img src="https://webmail.kinghost.com.br/img/svg/call.svg" alt="phone"/><span>0800.881.5464</span>
            </div>
            <div className="nav">
                <a href="/">
                    <img src="https://webmail.kinghost.com.br/img/svg/chat.svg" alt="chat"/><span>Atendimento humano (via Chat)</span>
                </a>
            </div >
            <div className="nav">
                <a href="/">
                    <img src="https://webmail.kinghost.com.br/img/svg/cog.svg" alt="cpanel"/><span>Painel de Controle</span>
                </a>
            </div>

        </header>
    )
}