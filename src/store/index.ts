import {
  TypedUseSelectorHook,
  useSelector as untypedUseSelector,
} from 'react-redux'
import { combineReducers, createStore } from 'redux'
import boardReducer from './board/reducer'
import gameReducer from './game/reducer'

const rootReducer = combineReducers({
  board: boardReducer,
  game: gameReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const useSelector: TypedUseSelectorHook<RootState> = untypedUseSelector

export default createStore(rootReducer)
