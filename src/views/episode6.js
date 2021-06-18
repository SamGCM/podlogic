import React from 'react'
import { Episode6Info } from '../hooks/geralInfo.js'
import AudioPlayer from '../hooks/audio.js'
import iconX from '../images/letra-x.png'


function Episode6(){

    const episode6 = Episode6Info()


        return(
            <div>
                <div className='container__episode'>
                <a href='/' id='btnClose'>
                    <img src={iconX} alt='' />
                </a>
                    <div className='episode__infomartions'>
                        <div className='episode__container-img'>
                            <img src={episode6['cover']} alt='' />
                        </div>
                        <div className='episode__container-text' >
                            <h1>Episódio {episode6['episodeNumber']} - {episode6['name']}</h1>
                            <p>{episode6['description']}</p>
                            <span id='participants'>
                                Participantes: {episode6['participants'].toString()}
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

export default Episode6