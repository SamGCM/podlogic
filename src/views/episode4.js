import React from 'react'
import { Episode4Info } from '../hooks/geralInfo.js'
import AudioPlayer from '../hooks/audio.js'
import iconX from '../images/letra-x.png'


function Episode4(){

    const episode4 = Episode4Info()

    
        return(
            <div>
                <div className='container__episode'>
                <a href='/' id='btnClose'>
                    <img src={iconX} alt='' />
                </a>
                    <div className='episode__infomartions'>
                        <div className='episode__container-img'>
                            <img src={episode4['cover']} alt='' />
                        </div>
                        <div className='episode__container-text' >
                            <h1>Episódio {episode4['episodeNumber']} - {episode4['name']}</h1>
                            <p>{episode4['description']}</p>
                            <a>Ler mais v</a>
                            <span id='participants'>
                                Participantes: {episode4['participants'].toString()}
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

export default Episode4