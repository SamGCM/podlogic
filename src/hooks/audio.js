import React, { useState, useEffect, useRef } from "react";
import {Link} from 'react-router-dom'


import imgPlay from '../images/play.png'
import imgPause from '../images/pause.png'
import iconNext from '../images/next.png'


import { convertTime } from '../functions/converTime.js';



const AudioPlayer = () => {

  //state

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  // references
  const audioPlayer = useRef()
  const progressBar = useRef()
  const animationRef = useRef()

  // effect

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


  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value
    changePlayerCurrentTime()
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value)
  }


  //Icones de play e pause
  const iconPlay = imgPlay
  const iconPause = imgPause

  // Pega a url atual para navegar para os próximos episódios

  const nextEpisode = () => {
    const actualUrl = window.location.href
    

    const regex = parseInt(actualUrl.substr(-1))+1

    if(regex == 7){
      return actualUrl.replace(actualUrl, 'episode-'+ 1)
    }{
      return actualUrl.replace(actualUrl, 'episode-'+ regex)
    }
  }

  const previousEpisode = () => {
    const actualUrl = window.location.href
    

    const regex = parseInt(actualUrl.substr(-1))-1
    
    
    if(regex == 0){
      return actualUrl.replace(actualUrl, 'episode-'+ 6)
    }{
      return actualUrl.replace(actualUrl, 'episode-'+ regex)
    }
  }

  const next = nextEpisode()
  const previous = previousEpisode()


  return (
    <div className='player'>
      <audio ref={audioPlayer} src='https://tutorialehtml.com/assets_tutorials/media/Loreena_Mckennitt_Snow_56bit.mp3'/>
      
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
            {(duration && !isNaN(duration)) && convertTime(duration)}
        </div>
      </div>
      
      <div className='player__controls'>
          <Link to={previous} id='btnPrevious'>
              <img src={iconNext} alt='' />
          </Link>
          <button id='btnPlay' onClick={togglePlayPause}>
            <img  src={isPlaying ? iconPause : iconPlay} alt='' />
          </button>
          <Link to={next} id='btnNext'>
              <img src={iconNext} alt='' />
          </Link>
          
      </div>

      
    </div>
  );
};

export default AudioPlayer;