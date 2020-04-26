import React, { useState } from 'react'
import { Stage } from 'react-konva'
import { Button } from 'reactstrap'
import { GAME_HEIGHT, GAME_WIDTH } from '../constants'
import { IBoardState } from '../store/board/types'
import Board from './Board'

interface IProps {
  readonly count: number
  readonly onPlayFromHere: () => void
  readonly snapshot: Omit<IBoardState, 'history'>
}

const Snapshot: React.FC<IProps> = ({ count, onPlayFromHere, snapshot }) => {
  const [showRender, setShowRender] = useState(false)

  return (
    <tr>
      <th className="align-middle w-0" scope="row">
        {count}
      </th>
      <td className="w-0">
        <code>{JSON.stringify(snapshot)}</code>
      </td>
      <td style={{ width: 170 }} className="text-center align-middle">
        {!showRender ? (
          <Button onClick={() => setShowRender(true)} color="link">
            Render snapshot
          </Button>
        ) : (
          <Stage
            width={GAME_WIDTH / 2}
            height={GAME_HEIGHT / 2}
            scale={{ x: 0.5, y: 0.5 }}
          >
            <Board
              head={snapshot.head}
              body={snapshot.body}
              food={snapshot.food}
              score={snapshot.score}
            />
          </Stage>
        )}
      </td>
      <td style={{ width: 170 }} className="text-center align-middle">
        <Button onClick={onPlayFromHere} color="secondary">
          Play from here
        </Button>
      </td>
    </tr>
  )
}

export default Snapshot
