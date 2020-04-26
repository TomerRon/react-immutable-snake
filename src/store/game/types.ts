export type TScreens = 'menu' | 'play'

export interface IGameState {
  readonly screen: TScreens
}

export const SET_SCREEN = 'SET_SCREEN'

interface ISetScreenAction {
  readonly type: typeof SET_SCREEN
  readonly payload: {
    readonly screen: TScreens
  }
}

export type TGameActions = ISetScreenAction
