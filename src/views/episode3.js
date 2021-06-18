import React from 'react'
import { Episode3Info } from '../hooks/geralInfo.js'
import AudioPlayer from '../hooks/audio.js'
import iconX from '../images/letra-x.png'


function Episode3(){

    const episode3 = Episode3Info()

    
        return(
            <div>
                <div className='container__episode'>
                <a href='/' id='btnClose'>
                    <img src={iconX} alt='' />
                </a>
                    <div className='episode__infomartions'>
                        <div className='episode__container-img'>
                            <img src={episode3['cover']} alt='' />
                        </div>
                        <div className='episode__container-text' >
                            <h1>Episódio {episode3['episodeNumber']} - {episode3['name']}</h1>
                            <p>{episode3['description']}</p>
                            <a href=''>Ler mais v</a>
                            <span id='participants'>
                                Participantes: {episode3['participants'].toString()}
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

export default Episode3