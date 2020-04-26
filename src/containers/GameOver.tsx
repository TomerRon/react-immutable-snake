import React from 'react'
import { useDispatch } from 'react-redux'
import GameOverScreen from '../components/GameOverScreen'
import { useSelector } from '../store'
import { newBoard } from '../store/board/actions'
import { setScreen } from '../store/game/actions'

const GameOver: React.FC = () => {
  const { score } = useSelector((state) => state.board)
  const dispatch = useDispatch()

  return (
    <GameOverScreen
      score={score}
      onTryAgain={() => dispatch(newBoard())}
      onMainMenu={() => dispatch(setScreen('menu'))}
    />
  )
}

export default GameOver
