import React from 'react'
import { Episode1Info } from '../hooks/geralInfo.js'

import iconPlay from '../images/play.png'
import iconNext from '../images/next.png'

import Player from '../hooks/audio.js'





function Episode1(){

    const episode1 = Episode1Info()

    
        return(
            <div>
                <div className='container__episode'>
                    <div className='episode__infomartions'>
                        <div className='episode__container-img'>
                            <img src={episode1['cover']} alt='' />
                        </div>
                        <div className='episode__container-text' >
                            <h1>Episódio {episode1['episodeNumber']} - {episode1['name']}</h1>
                            <p>{episode1['description']}</p>
                            <a>Ler mais v</a>
                            <span id='participants'>
                                Participantes: {episode1['participants'][0]}, {episode1['participants'][1]}, {episode1['participants'][2]}
                            </span>
                        </div>
                        
                    </div>
                    <div className='player'>
                        <div>
                            
                        </div>
                        <div className='player__controls'>
                            <button id='btnPrevious'>
                                <img src={iconNext} alt='' />
                            </button>
                            <Player url={'https://api-frontend-test.brlogic.com/podcast/episodes/365/audio.mp3'}/>
                            <button id='btnNext'>
                                <img src={iconNext} alt='' />
                            </button>
                        </div>
                    </div>
                    <button id='btnClose'>x</button>
                </div>
            </div>
        )
}

export default Episode1

