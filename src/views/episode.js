import React, {useState, useEffect, useRef} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';

// Importando imagens

import iconX from '../images/letra-x.png'
import iconDownArrow from '../images/down-arrow.png'
import imgPlay from '../images/play.png'
import imgPause from '../images/pause.png'
import iconNext from '../images/next.png'


// Importando função de converter segundos em minutos e segundos => 00:00
import { convertTime } from '../functions/converTime.js';
import convertString from '../functions/formatParticipants';




// Para criar a página do episódio 1

function Episode(){

    const {id} = useParams()



    const [infoEpisode, setInfoEpisode] = useState({
        id: '',
        name: '',
        description: '',
        duration: '',
        participants: '',
        episodeNumber: '',
        cover: '',
        audio: ''
        })

    const getInfo = async function ( ) {
    const url = `https://api-frontend-test.brlogic.com/podcast/episodes/${id}/details.json`

    // Fazendo requisição
    await axios.get(url)
        .then( response => {
            setInfoEpisode(response.data)
        })
    }

    // Fazer a requisição ser executada somente uma vez por renderização
    useEffect(( ) => {
    getInfo()
    }, [])

    const episode = infoEpisode


    // references
    const audioPlayer = useRef()
    const progressBar = useRef()
    const animationRef = useRef()
    const text = useRef()
    const downArrow = useRef()
    const readMore = useRef()
    const episodeContainerText = useRef()

    


    //state

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [height, setHeight] = useState('35%')
    const [rotation, setRotation] = useState('rotate(0deg)')
    const [btnMoreText, readLess] = useState('Ler mais')
    const [containerHeight, setContainerHeight] = useState('80%')


    

    
    
    // effect

    useEffect(( ) => {
        text.current.style.maxHeight = height;
        downArrow.current.style.transform = rotation
        readMore.current.innerHTML = btnMoreText
        episodeContainerText.current.style.height = containerHeight;
        },[height, rotation, btnMoreText, containerHeight])
    
    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration)
        setDuration(seconds)
        progressBar.current.max = seconds
    },[audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

    
    
    

    // função que muda o icone do botão de play para pause

    const togglePlayPause = () => {
        const prevValue = isPlaying
        
        setIsPlaying(!prevValue);
        if(!prevValue){
        audioPlayer.current.play()
        animationRef.current = requestAnimationFrame(whilePlaying)
        
        }else{
        audioPlayer.current.pause()
        cancelAnimationFrame(animationRef.current)
        
        }
    }


    

    
    
    // Faz o progress bar seguir junto com o tempo da música

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime 
        changePlayerCurrentTime()
        animationRef.current = requestAnimationFrame(whilePlaying)
    }
    
    
    // Faz mudar o tempo da música tocando na progressbar
    
    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value
        changePlayerCurrentTime()
    }
    
    const changePlayerCurrentTime = () => {
        
        progressBar.current.style.setProperty('--seek-before-width',
        `${progressBar.current.value / Math.floor(audioPlayer.current.duration) * 100}%`)
        setCurrentTime(parseInt(progressBar.current.value))
    }
    


    
    //Icones de play e pause declarados para ser usados na função
    const iconPlay = imgPlay
    const iconPause = imgPause

        return(
            <div>
                <div className='container__episode'>
                <a href='/' id='btnClose'>
                    <img src={iconX} alt='Icone de fechar episódio atual e voltar para o inicio' />
                </a>
                    <div className='episode__infomartions'>
                        <div className='episode__container-img'>
                            <img src={episode['cover']} alt='Mulher fala ao microfone em um estúdio de podcast' />
                        </div>
                        <div ref={episodeContainerText} className='episode__container-text' >
                            <h1>Episódio {episode['episodeNumber']} - {episode['name']}</h1>
                            <p ref={text}>  {episode['description']}</p>
                            <div className='container__read-more' onClick={() => {
                                setHeight(height === '35%' ? '50%' :'35%')
                                setRotation(rotation === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)')
                                readLess(btnMoreText === 'Ler mais' ? 'Ler menos' : 'Ler mais')
                                setContainerHeight(containerHeight === '80%' ? '80%' : '80%')
                            }}>
                                <span ref={readMore} >Ler mais</span>
                                <img ref={downArrow} src={iconDownArrow} alt='Icone de seta para expandir o texto'/>
                            </div>
                            <span id='participants'>
                                Participantes: {convertString(episode['participants'])}
                            </span>
                        </div>
                        
                    </div>
                    <div className='container__player'>
                    <div className='player'>
                        {/* Foi adicionado um áudio diferente neste apenas para demosntração de som */}
                        <audio ref={audioPlayer} src={episode['audio']}/>
                        
                        <div className='container__progress-audio'>
                            {/* Current time */}

                            <div className='currentTime'>
                                {convertTime(currentTime)}
                            </div>

                            {/* Progress bar */}
                            <div className='container__progressBar'>
                                <input type='range' className='progressBar' defaultValue='0'
                                ref={progressBar} onChange={changeRange} minLength='0' />
                            </div>


                            {/* duration*/}
                            <div className='duration'>
                                {convertTime(episode['duration'])}
                            </div>
                        </div>
                        
                        <div className='player__controls'>
                            <Link to={''} id='btnPrevious'>
                                <img src={iconNext} alt='Icone de avançar para próximo podcast' />
                            </Link>
                            <button id='btnPlay' onClick={togglePlayPause}>
                                <img  src={isPlaying ? iconPause : iconPlay} alt='Icone de pausar ou continuar audio' />
                            </button>
                            <Link to={''} id='btnNext'>
                                <img src={iconNext} alt='Icone de retroceder para podcast anterior' />
                            </Link>
                            
                        </div>

                        
                        </div>
                    </div>
                    
                </div>
            </div>
        )
}

export default Episode

