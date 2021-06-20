import axios from 'axios';
import React, { useState, useEffect, useRef} from 'react';
import { convertTime } from './functions/converTime.js';
import {Link} from 'react-router-dom'
import iconDownArrow from './images/down-arrow.png'



// HOOKS RESPONSAVEIS PELOS DADOS DOS EPISODIOS
import { Episode1Info, Episode2Info, Episode3Info, Episode4Info, Episode5Info, Episode6Info } from './hooks/geralInfo.js'


function App() {
  const [infoHome, setInfoHome] = useState({
    name: '',
    description: '',
    cover: '',
  })


  const getInfo = async function ( ) {
    const url = 'https://api-frontend-test.brlogic.com/podcast/details.json'
    await axios.get(url)
      .then( response => {
        setInfoHome(response.data)
      })
  }

  useEffect(( ) => {
    getInfo()
  }, [])


  // CHAMADAS DE FUNÇÕES DE HOOKS
  const episode1 = Episode1Info()
  const episode2 = Episode2Info()
  const episode3 = Episode3Info()
  const episode4 = Episode4Info()
  const episode5 = Episode5Info()
  const episode6 = Episode6Info()

  
  
  // Effect para ler mais do texto e esconder

  const text = useRef()
  const downArrow = useRef()
  const readMore = useRef()


  const [height, setHeight] = useState('70px')
  const [rotation, setRotation] = useState('rotate(0deg)')
  const [btnMoreText, readLess] = useState('Ler mais')

    useEffect(( ) => {
      text.current.style.maxHeight = height;
      downArrow.current.style.transform = rotation
      readMore.current.innerHTML = btnMoreText
    },[height, rotation, btnMoreText])
  

    

  return (
    <div>
      <div className='container'>
                <div id='container__left'>
                    <img id='left__img' src={infoHome.cover} alt=''/>
                    <div id='img__gradient-bottom'></div>
                    <h1> {infoHome.name}</h1>
                    <p>6 episódios</p>
                </div>
                <div id='container__right'>
                    <div id='about' > 
                    <h5 id='about__title' >SOBRE O PODCAST</h5>
                    <p ref={text}   id='about__text'>{infoHome['description']}</p>
                    <div className='container__read-more' onClick={() => {
                        setHeight(height === '70px' ? 'fit-content' :'70px')
                        setRotation(rotation === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)')
                        readLess(btnMoreText === 'Ler mais' ? 'Ler menos' : 'Ler mais')
                      }}>
                      <span ref={readMore} >Ler mais</span>
                      <img ref={downArrow} src={iconDownArrow} alt=''/>
                    </div>
                    </div>
                    <div id='box-list'>
                    <h5 id='box-list__title' >LISTA DE EPISÓDIOS</h5>
                    <ul id='box-list__episodes'>
                        <li className='episode__item'>
                        <Link to='/episode-1'>
                            <div className='episode__container-img'>
                            <img className='episode__img' src={episode1['cover']} alt=''/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {episode1['episodeNumber']} - {episode1['name']}</h1>
                            <p className='episode__duration'>{convertTime(episode1['duration'])}</p>
                            </div>
                        </Link>
                        </li>
                        <li className='episode__item'>
                        <Link to='/episode-2' >
                            <div class='episode__container-img'>
                            <img className='episode__img' src={episode2['cover']} alt=''/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {episode2['episodeNumber']} - {episode2['name']}</h1>
                            <p className='episode__duration'>{convertTime(episode2['duration'])}</p>
                            </div>
                        </Link>
                        </li>
                        <li className='episode__item'>
                        <Link to='/episode-3'>
                            <div class='episode__container-img'>
                            <img className='episode__img' src={episode3['cover']} alt=''/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {episode3['episodeNumber']} - {episode3['name']}</h1>
                            <p className='episode__duration'>{convertTime(episode3['duration'])}</p>
                            </div>
                        </Link>
                        </li>
                        <li className='episode__item'>
                        <Link to='/episode-4'>
                            <div class='episode__container-img'>
                            <img className='episode__img' src={episode4['cover']} alt=''/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {episode4['episodeNumber']} - {episode4['name']}</h1>
                            <p className='episode__duration'>{convertTime(episode4['duration'])}</p>
                            </div>
                        </Link>
                        </li>
                        <li className='episode__item'>
                        <Link to='/episode-5'>
                            <div class='episode__container-img'>
                            <img className='episode__img' src={episode5['cover']} alt=''/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {episode5['episodeNumber']} - {episode5['name']}</h1>
                            <p className='episode__duration'>{convertTime(episode5['duration'])}</p>
                            </div>
                        </Link>
                        </li>
                        <li className='episode__item'>
                        <Link to='/episode-6'>
                            <div class='episode__container-img'>
                            <img className='episode__img' src={episode6['cover']} alt=''/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {episode6['episodeNumber']} - {episode6['name']}</h1>
                            <p className='episode__duration'>{convertTime(episode6['duration'])}</p>
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
