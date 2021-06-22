import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

//Importando informações do episódio

import { Episode5Info } from '../hooks/geralInfo.js'


// Importando imagens

import iconX from '../images/letra-x.png'
import iconDownArrow from '../images/down-arrow.png'
import imgPlay from '../images/play.png'
import imgPause from '../images/pause.png'
import iconNext from '../images/next.png'


// Importando função de converter segundos em minutos e segundos => 00:00
import { convertTime } from '../functions/converTime.js';


// Para criar a página do episódio 1

function Episode5(){

    //Pegando array de objetos do episódio 1
    
    const episode5 = Episode5Info()


    


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
    const [height, setHeight] = useState('33%')
    const [rotation, setRotation] = useState('rotate(0deg)')
    const [btnMoreText, readLess] = useState('Ler mais')
    const [containerHeight, setContainerHeight] = useState('16rem')


    

    
    
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
        setCurrentTime(progressBar.current.value)
    }
    


    
    //Icones de play e pause declarados para ser usados na função
    const iconPlay = imgPlay
    const iconPause = imgPause
    


    // Pega a url atual para navegar para os próximos episódios
    
    const nextEpisode = () => {

        //  Pega a url atual do navegador
        const actualUrl = window.location.href
        
        //pega a última posição do array, no caso o número do episódio e soma mais um
        const regex = parseInt(actualUrl.substr(-1))+1 
    

        //Aqui se substitui toda a url e retorna episode-RESULTADO DO REGEX e navega para a url nova

        if(regex == 7){ //Se estiver no episódio 6 e o regex for 7, retorna a url para o episódio 1
        return actualUrl.replace(actualUrl, 'episode-'+ 1)
        }{
        return actualUrl.replace(actualUrl, 'episode-'+ regex)
        }
    }
    
    const previousEpisode = () => {

        //  Pega a url atual do navegador
        const actualUrl = window.location.href
        
        
        //pega a última posição do array, no caso o número do episódio e soma mais um
        const regex = parseInt(actualUrl.substr(-1))-1
        
        //Aqui se substitui toda a url e retorna episode-RESULTADO DO REGEX e navega para a url nova
        
        if(regex == 0){// Se estiver no episódio 1 e o regex for 0, retorna a url para o episódio 6
        return actualUrl.replace(actualUrl, 'episode-'+ 6)
        }{
        return actualUrl.replace(actualUrl, 'episode-'+ regex)
        }
    }
    
    const next = nextEpisode()
    const previous = previousEpisode()



        return(
            <div>
                <div className='container__episode'>
                <a href='/' id='btnClose'>
                    <img src={iconX} alt='Icone de fechar episódio atual e voltar para o inicio' />
                </a>
                    <div className='episode__infomartions'>
                        <div className='episode__container-img'>
                            <img src={episode5['cover']} alt='Homem sozinho, observando uma montanha' />
                        </div>
                        
                        <div ref={episodeContainerText} className='episode__container-text' >
                            <h1>Episódio {episode5['episodeNumber']} - {episode5['name']}</h1>
                            <p ref={text}>  {episode5['description']}</p>
                            <div className='container__read-more' onClick={() => {
                                setHeight(height === '33%' ? '50%' :'33%')
                                setRotation(rotation === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)')
                                readLess(btnMoreText === 'Ler mais' ? 'Ler menos' : 'Ler mais')
                                setContainerHeight(containerHeight === '16rem' ? '18rem' : '16rem')
                            }}>
                                <span ref={readMore} >Ler mais</span>
                                <img ref={downArrow} src={iconDownArrow} alt='Icone de seta para expandir o texto'/>
                            </div>
                            <span id='participants'>
                                Participantes: {episode5['participants'].toString()}
                            </span>
                        </div>
                        
                    </div>
                    <div className='container__player'>
                    <div className='player'>
                        <audio ref={audioPlayer} src={episode5['audio']}/>
                        
                        <div className='container__progress-audio'>
                            {/* Current time */}

                            <div className='currentTime'>
                            {convertTime(currentTime)}
                            </div>

                            {/* Progress bar */}
                            <div className='container__progressBar'>
                                <input type='range' className='progressBar' defaultValue='0' ref={progressBar} onChange={changeRange}/>
                            </div>


                            {/* duration*/}
                            <div className='duration'>
                                {convertTime(episode5['duration'])}
                            </div>
                        </div>
                        
                        <div className='player__controls'>
                            <Link to={previous} id='btnPrevious'>
                                <img src={iconNext} alt='Icone de avançar para próximo podcast' />
                            </Link>
                            <button id='btnPlay' onClick={togglePlayPause}>
                                <img  src={isPlaying ? iconPause : iconPlay} alt='Icone de pausar ou continuar audio' />
                            </button>
                            <Link to={next} id='btnNext'>
                                <img src={iconNext} alt='Icone de retroceder para podcast anterior' />
                            </Link>
                            
                        </div>

                        
                        </div>
                    </div>
                    
                </div>
            </div>
        )
}

export default Episode5