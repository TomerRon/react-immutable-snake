import { SET_SCREEN, TGameActions, TScreens } from './types'

export const setScreen = (screen: TScreens): TGameActions => ({
  type: SET_SCREEN,
  payload: {
    screen,
  },
})
