import { useEffect, useState } from 'react'
import { useSelector } from '../store'
import { TDirection } from '../store/board/types'
import useInterval from './useInterval'
import useKeyPress from './useKeyPress'

interface TControl {
  readonly keyCode: number
  readonly callback: () => any
}

type TControlScheme = Record<TDirection, TControl>

const useDirectionalInput = (
  scheme: TControlScheme,
  active: boolean,
  delay: number,
) => {
  const { direction } = useSelector((state) => state.board)
  const [directionInput, setDirectionInput] = useState<TDirection>()

  // The snake can't move backwards (e.g. change direction to right while it's going left), therefore:
  // - If the direction input is the reverse of the current direction, the direction stays the same
  // - Otherwise, the direction becomes the direction input
  const getNextStep = () => {
    if (active) {
      if (!directionInput) {
        setDirectionInput(direction)
        scheme[direction].callback()

        return
      }
      const directionsDict: readonly (readonly TDirection[])[] = [
        ['left', 'right'],
        ['right', 'left'],
        ['up', 'down'],
        ['down', 'up'],
      ]

      return (
        directionsDict
          // Find the pair of directions that matches the direction input
          .filter(([dir]) => directionInput === dir)
          // Call the correct callback based on the reverse of the current direction
          .forEach(([dir, reverse]) => {
            const handler =
              direction === reverse ? scheme[reverse] : scheme[dir]
            handler.callback()
          })
      )
    }
  }

  useEffect(() => {
    setDirectionInput(undefined)
  }, [active])

  useKeyPress((e) => {
    if (active) {
      Object.entries(scheme).forEach((entry) => {
        const [key, value] = entry as readonly [TDirection, TControl]
        if (e.keyCode === value.keyCode) {
          setDirectionInput(key)
        }
      })
    }
  })

  useInterval(getNextStep, delay)
}

export default useDirectionalInput
