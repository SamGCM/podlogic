import React from 'react'
import { Episode1Info } from '../hooks/geralInfo.js'
import AudioPlayer from '../hooks/audio.js'
import iconX from '../images/letra-x.png'


function Episode1(){

    const episode1 = Episode1Info()

    
        return(
            <div>
                <div className='container__episode'>
                <a href='/' id='btnClose'>
                    <img src={iconX} alt='' />
                </a>
                    <div className='episode__infomartions'>
                        <div className='episode__container-img'>
                            <img src={episode1['cover']} alt='' />
                        </div>
                        <div className='episode__container-text' >
                            <h1>Episódio {episode1['episodeNumber']} - {episode1['name']}</h1>
                            <p>{episode1['description']}</p>
                            <a>Ler mais v</a>
                            <span id='participants'>
                                Participantes: {episode1['participants'].toString()}
                            </span>
                        </div>
                        
                    </div>
                    <div className='container__player'>
                        <AudioPlayer/>
                    </div>
                    
                </div>
            </div>
        )
}

export default Episode1

