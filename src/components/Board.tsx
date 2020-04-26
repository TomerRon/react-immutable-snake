import React from 'react'
import { Layer, Rect, Text } from 'react-konva'
import { GAME_WIDTH, PLAYAREA_HEIGHT, SCOREBOARD_HEIGHT } from '../constants'
import { INode } from '../store/board/types'
import Node from './Node'

interface IProps {
  readonly head: INode
  readonly body: readonly INode[]
  readonly food: INode
  readonly score: number
}

const Board: React.FC<IProps> = ({ head, body, food, score }) => (
  <Layer>
    <Rect fill="#000" width={GAME_WIDTH} height={PLAYAREA_HEIGHT} />
    <Node fill={'#ff0000'} node={food} />
    {[head, ...body].map((node, i) => (
      <Node key={i} node={node} />
    ))}
    <Rect fill="#fff" width={GAME_WIDTH} height={2} y={PLAYAREA_HEIGHT} />
    <Rect
      fill="#000"
      width={GAME_WIDTH}
      height={SCOREBOARD_HEIGHT - 2}
      y={PLAYAREA_HEIGHT + 2}
    />
    <Text
      fill="#fff"
      fontFamily="'Press Start 2P', cursive"
      text={`SCORE: ${score}`}
      x={5}
      y={PLAYAREA_HEIGHT + 11}
    />
  </Layer>
)

export default Board
