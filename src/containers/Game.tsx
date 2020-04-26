import React from 'react'
import { useSelector } from '../store'
import BoardContainer from './BoardContainer'
import MainMenu from './MainMenu'

const Game: React.FC = () => {
  const { screen } = useSelector((state) => state.game)

  return screen === 'menu' ? <MainMenu /> : <BoardContainer />
}

export default Game
