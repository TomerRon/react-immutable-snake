import React from 'react'
import { Layer, Rect, Text } from 'react-konva'
import { GAME_HEIGHT, GAME_WIDTH } from '../constants'

const PauseScreen: React.FC = () => (
  <Layer>
    <Rect fill="#333" width={GAME_WIDTH} height={GAME_HEIGHT} opacity={0.8} />
    <Text
      width={GAME_WIDTH}
      height={GAME_HEIGHT}
      fill="#fff"
      fontSize={48}
      fontFamily="'Press Start 2P', cursive"
      text="PAUSED"
      wrap="char"
      align="center"
      verticalAlign="middle"
    />
  </Layer>
)

export default PauseScreen
