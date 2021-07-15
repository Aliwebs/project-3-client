import React from 'react'
import { AudioQueueContext } from '../../App.js'

function PlayBtn({name, singer, cover, musicSrc}) {
  const { updateAudioQueue } = React.useContext(AudioQueueContext)
  const handleClick = () => {
    const song = {
      name: name,
      singer: singer.name,
      cover: cover,
      musicSrc: musicSrc,
    }

    updateAudioQueue([song], true)

  }

  return (
    <button className="button" onClick={handleClick}>▶️</button>
  )
}

export default PlayBtn