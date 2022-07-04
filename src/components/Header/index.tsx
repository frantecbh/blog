import React from 'react'
import { Container, Conteudo, HeroAerea } from './styles'

import { BsLinkedin, BsGithub } from 'react-icons/bs'



import ImgLogo from '../../assets/images/logo.png'
import ImgCode from '../../assets/images/code.png'

import htmlImg from '../../assets/images/html.png'
import cssImg from '../../assets/images/css.png'
import jsImg from '../../assets/images/js.png'
import reactjsImg from '../../assets/images/react.png'
import rnImg from '../../assets/images/rn.png'
import nodeImg from '../../assets/images/nodejs.png'



export function Header() {
    return (
        <Container>
            <Conteudo>
                <header>
                    <a href="/"><img src={ImgLogo} alt="logo site" /></a>
                    <div>
                        <a className='social' href="https://github.com/frantecbh" target="_blank"><BsGithub size={24} color='#fff' /> </a>
                        <a className='social' href="https://www.linkedin.com/in/francisco-menezes-875a0a36/" target="_blank"><BsLinkedin size={24} color='#fff' /> </a>
                    </div>
                </header>
                <HeroAerea>

                    <section className='leftside'>
                        <h1>Bem-vindo ao meu portfólio pessoal</h1>
                        <p>Cadastre seu e-mail para participar e tenha acesso
                            aos mais diversos conteúdos de programação.</p>
                        <div className='form'>
                            <form action="">
                                <input type="text" placeholder='Digite seu email...' />
                                <button>Cadastrar</button>
                            </form>
                        </div>
                        <div className='habilidades'>
                            <img src={htmlImg} alt="logo html" />
                            <img src={cssImg} alt="logo html" />
                            <img src={jsImg} alt="logo html" />
                            <img src={reactjsImg} alt="logo html" />
                            <img src={rnImg} alt="logo html" />
                            <img src={nodeImg} alt="logo html" />
                        </div>
                    </section>
                    <section className='rightside'>
                        <img src={ImgCode} alt="logo site" />

                    </section>

                </HeroAerea>

            </Conteudo>
        </Container>
    )
}
