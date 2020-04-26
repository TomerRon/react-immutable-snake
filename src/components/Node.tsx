import React from 'react'
import { Rect } from 'react-konva'
import { TILE_SIZE } from '../constants'
import { INode } from '../store/board/types'

interface IProps {
  readonly fill?: string
  readonly node: INode
}

const Node: React.FC<IProps> = ({ fill = '#fff', node }) => (
  <Rect
    x={TILE_SIZE * node.x}
    y={TILE_SIZE * node.y}
    fill={fill}
    width={TILE_SIZE}
    height={TILE_SIZE}
  />
)

export default Node
