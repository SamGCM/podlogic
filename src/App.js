import axios from 'axios';
import React, { useState, useEffect, useRef} from 'react';
import { convertTime } from './functions/converTime.js';
import {Link} from 'react-router-dom'
import iconDownArrow from './images/down-arrow.png'


function App() {

  const [isLoading, setLoading] = useState(true);
  const [infoHome, setInfoHome] = useState({
    name: '',
    description: '',
    cover: '',
  })


  const text = useRef()
  const downArrow = useRef()
  const readMore = useRef()

  const [height, setHeight] = useState('33%')
  const [rotation, setRotation] = useState('rotate(0deg)')
  const [btnMoreText, readLess] = useState('Ler mais')



  
  const getInfo = async function ( ) {
    const url = 'https://api-frontend-test.brlogic.com/podcast/details.json'
    await axios.get(url)
      .then( response => {
        setInfoHome(response.data)
        setLoading(false)
      })
  }

  useEffect(( ) => {
    getInfo()
  }, [])

  if (isLoading) {
    return <img  src={''} alt=''/>;
  }
  
  
    

  return (
    <div>
      <div className='container'>
                <div id='container__left'>
                    <img id='left__img' src={infoHome.cover} 
                    alt='Fone de ouvido, microfone, se preparando para o podcast'/>
                    <div id='img__gradient-bottom'></div>
                    <h1> {infoHome.name}</h1>
                    <p>6 episódios</p>
                </div>
                <div id='container__right'>
                    <div id='about' > 
                    <h5 id='about__title' >SOBRE O PODCAST</h5>
                    <p ref={text} id='about__text'>{infoHome['description']}</p>
                    <div className='container__read-more' >
                      <span ref={readMore} >Ler mais</span>
                      <img  ref={downArrow} src={iconDownArrow} alt='Icone de seta para ler mais'/>
                    </div>
                    </div>
                    <div id='box-list'>
                    <h5 id='box-list__title' >LISTA DE EPISÓDIOS</h5>
                    <ul id='box-list__episodes'>
                        <li className='episode__item'>
                        <Link to={`/episode/${infoHome.episodes[0].id}`}>
                            <div className='episode__container-img'>
                            <img className='episode__img' src={infoHome.episodes[0].cover} 
                            alt='Episódio 1, mulher fala sobre cuidar das finanças pessoais'/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {infoHome.episodes[0].episodeNumber} - {infoHome.episodes[0].name}</h1>
                            <p className='episode__duration'>{convertTime(infoHome.episodes[0].duration)}</p>
                            </div>
                        </Link>
                        </li>
                        <li className='episode__item'>
                        <Link to={`/episode/${infoHome.episodes[1].id}`} >
                            <div className='episode__container-img'>
                            <img className='episode__img' src={infoHome.episodes[1].cover}
                            alt='Homem em frente a notebook, trabalhando home office, em casa'/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {infoHome.episodes[1].episodeNumber} - {infoHome.episodes[1].name}</h1>
                            <p className='episode__duration'>{convertTime(infoHome.episodes[1].duration)}</p>
                            </div>
                        </Link>
                        </li>
                        <li className='episode__item'>
                        <Link to={`/episode/${infoHome.episodes[2].id}`}>
                            <div className='episode__container-img'>
                            <img className='episode__img' src={infoHome.episodes[2].cover}
                            alt='Caixa de som com assistente virtual, alexa, google assistente, siri'/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {infoHome.episodes[2].episodeNumber} - {infoHome.episodes[2].name}</h1>
                            <p className='episode__duration'>{convertTime(infoHome.episodes[2].duration)}</p>
                            </div>
                        </Link>
                        </li>
                        <li className='episode__item'>
                        <Link to={`/episode/${infoHome.episodes[3].id}`}>
                            <div className='episode__container-img'>
                            <img className='episode__img' src={infoHome.episodes[3].cover}
                            alt='Enorme quantidade de carros em rodovia'/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {infoHome.episodes[3].episodeNumber} - {infoHome.episodes[3].name}</h1>
                            <p className='episode__duration'>{convertTime(infoHome.episodes[3].duration)}</p>
                            </div>
                        </Link>
                        </li>
                        <li className='episode__item'>
                        <Link to={`/episode/${infoHome.episodes[4].id}`}>
                            <div className='episode__container-img'>
                            <img className='episode__img' src={infoHome.episodes[4].cover}
                            alt='Homem sozinho, observando uma montanha'/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {infoHome.episodes[4].episodeNumber} - {infoHome.episodes[4].name}</h1>
                            <p className='episode__duration'>{convertTime(infoHome.episodes[4].duration)}</p>
                            </div>
                        </Link>
                        </li>
                        <li className='episode__item'>
                        <Link to={`/episode/${infoHome.episodes[5].id}`}>
                            <div className='episode__container-img'>
                            <img className='episode__img' src={infoHome.episodes[5].cover}
                            alt="mini letreiro decorativo, com a frase: 'Good bye friends'"/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {infoHome.episodes[5].episodeNumber} - {infoHome.episodes[5].name}</h1>
                            <p className='episode__duration'>{convertTime(infoHome.episodes[5].duration)}</p>
                            </div>
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
