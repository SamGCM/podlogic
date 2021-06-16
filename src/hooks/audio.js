import React, { useState, useEffect } from "react";
import imgPlay from '../images/play.png'
import imgPause from '../images/pause.png'

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const iconPlay = imgPlay
const iconPause = imgPause

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button id='btnPlay' onClick={toggle}>
        <img  src={playing ? iconPause : iconPlay}/>
      </button>
    </div>
  );
};

export default Player;