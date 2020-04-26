import Konva from 'konva'
import React, { useState } from 'react'
import { Rect, Text } from 'react-konva'
import { GAME_HEIGHT, GAME_WIDTH } from '../constants'

interface IProps {
  readonly onClick: (e: Konva.KonvaEventObject<MouseEvent>) => any
  readonly text: string
  readonly y: number
}

const Button: React.FC<IProps> = ({ onClick, text, y }) => {
  const [hover, setHover] = useState(false)

  return (
    <>
      <Text
        width={GAME_WIDTH}
        height={GAME_HEIGHT}
        fill="#fff"
        fontSize={24}
        fontFamily="'Press Start 2P', cursive"
        text={text}
        wrap="char"
        align="center"
        y={y + 15}
        opacity={hover ? 1 : 0.8}
      />
      <Rect
        stroke={'#fff'}
        width={GAME_WIDTH - 50}
        height={50}
        x={25}
        y={y}
        align="center"
        onClick={onClick}
        opacity={hover ? 1 : 0.8}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </>
  )
}

export default Button
