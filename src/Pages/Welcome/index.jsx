import React from 'react';
import { Container } from './style';
import Logo from '../../Assets/Logo.svg'
import {Link} from 'react-router-dom'

function Welcome() {
  return(
    <Container>
        <div className='left'>
            <img src={Logo} alt="logo do site" />
        </div>

        <div className='right'>
            <h1>Olá, Seja Bem Vindo(a)!</h1>
            <p>Pensamos na praticidade para o seu churrasco, encontre o churrasqueiro ideal e mais próximo de você!</p>
            <button><Link to="/home">Saiba mais...</Link></button>
        </div>
    </Container>
  )
}

export default Welcome;