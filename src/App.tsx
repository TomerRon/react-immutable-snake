import React from 'react'
import { Stage } from 'react-konva'
import { Provider } from 'react-redux'
import Instructions from './components/Instructions'
import { GAME_HEIGHT, GAME_WIDTH } from './constants'
import Game from './containers/Game'
import Stats from './containers/Stats'
import store from './store'

const App = () => (
  <>
    <Provider store={store}>
      <div
        className="d-flex flex-column align-items-center py-3"
        style={{
          background: '#efefef',
          borderBottom: 'solid 1px #ccc',
          boxShadow: '0px -3px 10px 1px rgba(0,0,0,0.3)',
        }}
      >
        <h5
          className="text-center mb-3"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          react-immutable-snake
        </h5>
        <a
          href="https://github.com/TomerRon/react-immutable-snake"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <p>A game of life, death, and time travel</p>
        <Instructions />
        <div style={{ width: GAME_WIDTH }}>
          <Stage width={GAME_WIDTH} height={GAME_HEIGHT}>
            <Provider store={store}>
              <Game />
            </Provider>
          </Stage>
        </div>
      </div>
      <div className="my-5">
        <Stats />
      </div>
    </Provider>
  </>
)

export default App
