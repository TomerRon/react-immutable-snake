import { SET_SCREEN, TGameActions } from '../game/types'
import {
  IBoardState,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP,
  NEW_BOARD,
  SET_BOARD_STATE,
  TBoardActions,
  TOGGLE_PAUSE,
} from './types'
import { getNextBoardState } from './utils'

const initialState: IBoardState = {
  head: { x: 18, y: 18 },
  body: [{ x: 19, y: 18 }],
  food: { x: 5, y: 5 },
  direction: 'left',
  score: 0,
  dead: false,
  paused: false,
  history: [],
}

const boardReducer = (
  state = initialState,
  action: TBoardActions | TGameActions,
): IBoardState => {
  const { history, ...snapshot } = state
  const { head } = state

  switch (action.type) {
    case MOVE_LEFT:
      return getNextBoardState(state, 'left', { ...head, x: head.x - 1 })
    case MOVE_UP:
      return getNextBoardState(state, 'up', { ...head, y: head.y - 1 })
    case MOVE_RIGHT:
      return getNextBoardState(state, 'right', { ...head, x: head.x + 1 })
    case MOVE_DOWN:
      return getNextBoardState(state, 'down', { ...head, y: head.y + 1 })
    case TOGGLE_PAUSE:
      return {
        ...state,
        paused: !state.paused,
        history: [...state.history, snapshot],
      }
    case NEW_BOARD:
      return initialState
    case SET_BOARD_STATE:
      return action.payload.state
    case SET_SCREEN:
      return initialState
    default:
      return state
  }
}

export default boardReducer
