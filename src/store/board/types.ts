export interface INode {
  readonly x: number
  readonly y: number
}

export type TDirection = 'left' | 'up' | 'right' | 'down'

export interface IBoardState {
  readonly head: INode
  readonly body: readonly INode[]
  readonly food: INode
  readonly direction: TDirection
  readonly score: number
  readonly dead: boolean
  readonly paused: boolean
  readonly history: readonly Omit<IBoardState, 'history'>[]
}

export const MOVE_LEFT = 'MOVE_LEFT'
export const MOVE_UP = 'MOVE_UP'
export const MOVE_RIGHT = 'MOVE_RIGHT'
export const MOVE_DOWN = 'MOVE_DOWN'
export const TOGGLE_PAUSE = 'TOGGLE_PAUSE'
export const NEW_BOARD = 'NEW_BOARD'
export const SET_BOARD_STATE = 'SET_BOARD_STATE'

interface IMoveLeftAction {
  readonly type: typeof MOVE_LEFT
}

interface IMoveUpAction {
  readonly type: typeof MOVE_UP
}

interface IMoveRightAction {
  readonly type: typeof MOVE_RIGHT
}

interface IMoveDownAction {
  readonly type: typeof MOVE_DOWN
}

interface ITogglePauseAction {
  readonly type: typeof TOGGLE_PAUSE
}

interface INewBoardAction {
  readonly type: typeof NEW_BOARD
}

interface ISetBoardStateAction {
  readonly type: typeof SET_BOARD_STATE
  readonly payload: {
    readonly state: IBoardState
  }
}

export type TBoardActions =
  | IMoveLeftAction
  | IMoveUpAction
  | IMoveRightAction
  | IMoveDownAction
  | ITogglePauseAction
  | ISetBoardStateAction
  | INewBoardAction
