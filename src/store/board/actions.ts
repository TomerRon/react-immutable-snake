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

export const moveLeft = (): TBoardActions => ({
  type: MOVE_LEFT,
})

export const moveUp = (): TBoardActions => ({
  type: MOVE_UP,
})

export const moveRight = (): TBoardActions => ({
  type: MOVE_RIGHT,
})

export const moveDown = (): TBoardActions => ({
  type: MOVE_DOWN,
})

export const togglePause = (): TBoardActions => ({
  type: TOGGLE_PAUSE,
})

export const newBoard = (): TBoardActions => ({
  type: NEW_BOARD,
})

export const setBoardState = (state: IBoardState): TBoardActions => ({
  type: SET_BOARD_STATE,
  payload: {
    state,
  },
})
