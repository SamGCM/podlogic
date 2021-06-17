import React, { useState, useEffect, useRef } from "react";
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


  return (
    <div className='player'>
      <audio ref={audioPlayer} src='https://tutorialehtml.com/assets_tutorials/media/Loreena_Mckennitt_Snow_56bit.mp3'/>
      
      <div className='container__progress-audio'>
        {/* Current time */}

        <div className='currentTime'>
          {convertTime(currentTime)}
        </div>

        {/* Progress bar */}
        <div>
            <input type='range' className='progressBar' defaultValue='0' ref={progressBar} onChange={changeRange}/>
        </div>


        {/* duration*/}
        <div className='duration'>
            {(duration && !isNaN(duration)) && convertTime(duration)}
        </div>
      </div>
      
      <div className='player__controls'>
          <button id='btnPrevious'>
              <img src={iconNext} alt='' />
          </button>
          <button id='btnPlay' onClick={togglePlayPause}>
            <img  src={isPlaying ? iconPause : iconPlay}/>
          </button>
          <button id='btnNext'>
              <img src={iconNext} alt='' />
          </button>
          
      </div>

      
    </div>
  );
};

export default AudioPlayer;