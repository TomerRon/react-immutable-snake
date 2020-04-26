import React from 'react'
import down from '../assets/down.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import space from '../assets/space.png'
import up from '../assets/up.png'

const Instructions = () => (
  <div className="d-flex flex-row mb-3">
    <div className="d-flex flex-row align-items-center mr-4">
      <img alt="Spacebar" width={60} src={space} />
      <span className="ml-2">Pause/Unpause</span>
    </div>
    <div className="d-flex flex-row align-items-center">
      <img alt="Left" width={50} src={left} />
      <img alt="Up" width={50} src={up} />
      <img alt="Right" width={50} src={right} />
      <img alt="Down" width={50} src={down} />
      <span className="ml-2">Move</span>
    </div>
  </div>
)

export default Instructions
