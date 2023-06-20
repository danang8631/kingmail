import React from 'react';
import './Header.css';

export default () => {
    return (
        <header>
            <nav className="nav">
                <div>
                    <a href='/'>
                        <img src="https://webmail.kinghost.com.br/img/logo-king.svg" alt="logo" />
                    </a>
                </div>
                <ul className='list'>
                    <li>
                        <a href='/'>
                            <img src="https://webmail.kinghost.com.br/img/svg/call.svg" alt="phone" /><span>0800.881.5464</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <img src="https://webmail.kinghost.com.br/img/svg/chat.svg" alt="chat" /><span>Atendimento humano (via chat)</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <img src="https://webmail.kinghost.com.br/img/svg/cog.svg" alt="control" /><span>Painel de Controle</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}