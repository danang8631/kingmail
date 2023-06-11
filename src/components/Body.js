import React from 'react';
import './Body.css';

export default () => {
    return (
        <div className="log">
            <div class="text">
                <h1 style={{ margin: '0' }} >WEBMAIL SEGURO DA KINGHOST</h1><span class="span" style={{ padding: '0' }}>Acesse e gerencie seu e-mail de qualquer lugar e conte com diversos recursos.</span>
            </div>
            <div className="text">
                <h2 style={{ margin: '0' }}> ACESSAR WEBMAIL</h2><span class="span" style={{ padding: '0' }}>Conecte-se utilizando o sistema de webmail <strong>Roundclube</strong></span>
            </div>
            <div className="log--enter">
                <form class="form">
                    <ul>
                        <li>
                            <label>Email: </label>
                            <input className="input" type="text" placeholder="email@dominio.com.br" name="login-username"></input>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <label>Senha: </label>
                            <input className="input" type="password" placeholder="senha" name="password"></input>
                        </li>
                    </ul>
                </form>
            </div>
            <div>
                <a href="/" style={{ color: '#782DC8' }}>Esqueceu a senha?</a>
            </div>
            <div>
                <button>ENTRAR</button>
            </div>

        </div>

    )
}
