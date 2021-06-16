import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { convertTime } from './functions/converTime.js';


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


  

  

  return (
    <div>
      <div className='container'>
                <div id='container__left'>
                    <img id='left__img' src={infoHome.cover} alt=''/>
                    <div id='img__gradient-bottom'></div>
                    <h1>{infoHome.name}</h1>
                    <p>6 episódios</p>
                </div>
                <div id='container__right'>
                    <div id='about' > 
                    <h5 id='about__title' >SOBRE O PODCAST</h5>
                    <p id='about__text'>{infoHome['description']}</p>
                    <a>Ler mais</a>
                    </div>
                    <div id='box-list'>
                    <h5 id='box-list__title' >LISTA DE EPISÓDIOS</h5>
                    <ul id='box-list__episodes'>
                        <li className='episode__item'>
                        <a href='/episode-1'>
                            <div class='episode__container-img'>
                            <img className='episode__img' src={episode1['cover']} alt=''/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {episode1['episodeNumber']} - {episode1['name']}</h1>
                            <p className='episode__duration'>{convertTime(episode1['duration'])}</p>
                            </div>
                        </a>
                        </li>
                        <li className='episode__item'>
                        <a>
                            <div class='episode__container-img'>
                            <img className='episode__img' src={episode2['cover']} alt=''/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {episode2['episodeNumber']} - {episode2['name']}</h1>
                            <p className='episode__duration'>{convertTime(episode2['duration'])}</p>
                            </div>
                        </a>
                        </li>
                        <li className='episode__item'>
                        <a>
                            <div class='episode__container-img'>
                            <img className='episode__img' src={episode3['cover']} alt=''/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {episode3['episodeNumber']} - {episode3['name']}</h1>
                            <p className='episode__duration'>{convertTime(episode3['duration'])}</p>
                            </div>
                        </a>
                        </li>
                        <li className='episode__item'>
                        <a>
                            <div class='episode__container-img'>
                            <img className='episode__img' src={episode4['cover']} alt=''/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {episode4['episodeNumber']} - {episode4['name']}</h1>
                            <p className='episode__duration'>{convertTime(episode4['duration'])}</p>
                            </div>
                        </a>
                        </li>
                        <li className='episode__item'>
                        <a>
                            <div class='episode__container-img'>
                            <img className='episode__img' src={episode5['cover']} alt=''/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {episode5['episodeNumber']} - {episode5['name']}</h1>
                            <p className='episode__duration'>{convertTime(episode5['duration'])}</p>
                            </div>
                        </a>
                        </li>
                        <li className='episode__item'>
                        <a>
                            <div class='episode__container-img'>
                            <img className='episode__img' src={episode6['cover']} alt=''/>
                            </div>
                            <div className='episode__about'>
                            <h1 className='episode__title' >Episódio {episode6['episodeNumber']} - {episode6['name']}</h1>
                            <p className='episode__duration'>{convertTime(episode6['duration'])}</p>
                            </div>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
