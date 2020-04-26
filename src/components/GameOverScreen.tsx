import React from 'react'
import { Layer, Rect, Text } from 'react-konva'
import { GAME_HEIGHT, GAME_WIDTH } from '../constants'
import Button from './Button'

interface IProps {
  readonly onMainMenu: () => void
  readonly onTryAgain: () => void
  readonly score: number
}

const GameOverScreen: React.FC<IProps> = ({
  onMainMenu,
  onTryAgain,
  score,
}) => (
  <Layer>
    <Rect fill="#333" width={GAME_WIDTH} height={GAME_HEIGHT} opacity={0.8} />
    <Text
      width={GAME_WIDTH}
      height={GAME_HEIGHT}
      fill="#fff"
      fontSize={24}
      fontFamily="'Press Start 2P', cursive"
      text="GAME OVER"
      wrap="char"
      align="center"
      y={50}
    />
    <Text
      width={GAME_WIDTH}
      height={GAME_HEIGHT}
      fill="#fff"
      fontSize={12}
      fontFamily="'Press Start 2P', cursive"
      text={`SCORE: ${score}`}
      wrap="char"
      align="center"
      y={90}
    />
    <Button onClick={onTryAgain} text="TRY AGAIN" y={GAME_HEIGHT / 2 - 8} />
    <Button onClick={onMainMenu} text="MAIN MENU" y={GAME_HEIGHT / 2 + 64} />
  </Layer>
)

export default GameOverScreen
