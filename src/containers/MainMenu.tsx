import React, { useEffect, useState } from 'react'
import { Layer, Rect } from 'react-konva'
import { useDispatch } from 'react-redux'
import Button from '../components/Button'
import { GAME_HEIGHT, GAME_WIDTH } from '../constants'
import { setScreen } from '../store/game/actions'

const MainMenu: React.FC = () => {
  const dispatch = useDispatch()
  const [showButton, setShowButton] = useState(false)

  // Silly but needed hack
  // Without this timeout, the button renders before the font is loaded
  // ¯\_(ツ)_/¯
  useEffect(() => {
    setTimeout(() => setShowButton(true), 500)
  }, [])

  return (
    <Layer>
      <Rect fill="#000" width={GAME_WIDTH} height={GAME_HEIGHT} />
      {showButton && (
        <Button
          onClick={() => dispatch(setScreen('play'))}
          text={'START GAME'}
          y={GAME_HEIGHT / 2 - 32}
        />
      )}
    </Layer>
  )
}

export default MainMenu
