import { IGameState, SET_SCREEN, TGameActions } from './types'

const initialState: IGameState = {
  screen: 'menu',
}

const gameReducer = (
  state = initialState,
  action: TGameActions,
): IGameState => {
  switch (action.type) {
    case SET_SCREEN:
      return {
        screen: action.payload.screen,
      }
    default:
      return state
  }
}

export default gameReducer
