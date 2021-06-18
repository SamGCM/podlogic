import React from 'react'
import { Episode2Info } from '../hooks/geralInfo.js'
import AudioPlayer from '../hooks/audio.js'
import iconX from '../images/letra-x.png'


function Episode2(){

    const episode2 = Episode2Info()

    
        return(
            <div>
                <div className='container__episode'>
                <a href='/' id='btnClose'>
                    <img src={iconX} alt='' />
                </a>
                    <div className='episode__infomartions'>
                        <div className='episode__container-img'>
                            <img src={episode2['cover']} alt='' />
                        </div>
                        <div className='episode__container-text' >
                            <h1>Episódio {episode2['episodeNumber']} - {episode2['name']}</h1>
                            <p>{episode2['description']}</p>
                            <a>Ler mais v</a>
                            <span id='participants'>
                                Participantes: {episode2['participants'].toString()}
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

export default Episode2