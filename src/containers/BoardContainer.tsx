import React from 'react'
import { useDispatch } from 'react-redux'
import Board from '../components/Board'
import PauseScreen from '../components/PauseScreen'
import useDirectionalInput from '../hooks/useDirectionalInput'
import useKeyPress from '../hooks/useKeyPress'
import { useSelector } from '../store'
import {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  togglePause,
} from '../store/board/actions'
import GameOver from './GameOver'

const BoardContainer: React.FC = () => {
  const { head, body, food, score, dead, paused } = useSelector(
    (state) => state.board,
  )
  const dispatch = useDispatch()

  useDirectionalInput(
    {
      left: {
        keyCode: 37,
        callback: () => dispatch(moveLeft()),
      },
      up: {
        keyCode: 38,
        callback: () => dispatch(moveUp()),
      },
      right: {
        keyCode: 39,
        callback: () => dispatch(moveRight()),
      },
      down: {
        keyCode: 40,
        callback: () => dispatch(moveDown()),
      },
    },
    !dead && !paused,
    50,
  )

  useKeyPress((e) =>
    [
      {
        keyCode: 32,
        callback: () => (!dead ? dispatch(togglePause()) : {}),
      },
    ]
      .find((option) => option.keyCode === e.keyCode)
      ?.callback(),
  )

  return (
    <>
      <Board head={head} body={body} food={food} score={score} />
      {paused && <PauseScreen />}
      {dead && <GameOver />}
    </>
  )
}

export default BoardContainer
