import React, {useState, useEffect, useRef} from 'react'
import { Episode4Info } from '../hooks/geralInfo.js'
import AudioPlayer from '../hooks/audio.js'
import iconX from '../images/letra-x.png'
import iconDownArrow from '../images/down-arrow.png'

function Episode4(){

    const episode4 = Episode4Info()

    // Effect para ler mais do texto e esconder

    const text = useRef()
    const downArrow = useRef()
    const readMore = useRef()
    const episodeContainerText = useRef()

    
    const [height, setHeight] = useState('70px')
    const [rotation, setRotation] = useState('rotate(0deg)')
    const [btnMoreText, readLess] = useState('Ler mais')
    const [containerHeight, setContainerHeight] = useState('18rem')


    useEffect(( ) => {
    text.current.style.maxHeight = height;
    downArrow.current.style.transform = rotation
    readMore.current.innerHTML = btnMoreText
    episodeContainerText.current.style.height = containerHeight;
    },[height, rotation, btnMoreText, containerHeight])
    
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
                        <div ref={episodeContainerText} className='episode__container-text' >
                            <h1>Episódio {episode4['episodeNumber']} - {episode4['name']}</h1>
                            <p ref={text}>  {episode4['description']}</p>
                            <div className='container__read-more' onClick={() => {
                                setHeight(height === '70px' ? 'fit-content' :'70px')
                                setRotation(rotation === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)')
                                readLess(btnMoreText === 'Ler mais' ? 'Ler menos' : 'Ler mais')
                                setContainerHeight(containerHeight == '18rem' ? '50vh' : '18rem')
                            }}>
                                <span ref={readMore} >Ler mais</span>
                                <img ref={downArrow} src={iconDownArrow} alt=''/>
                            </div>
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