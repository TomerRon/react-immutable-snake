import { IBoardState, INode, TDirection } from './types'

const MAX_X = 31
const MAX_Y = 28

const isCollision = (node1: INode, node2: INode) =>
  node1.x === node2.x && node1.y === node2.y

const getRandomNode = (): INode => ({
  x: Math.floor(Math.random() * (MAX_X + 1)),
  y: Math.floor(Math.random() * (MAX_Y + 1)),
})

export const getNextBoardState = (
  state: IBoardState,
  direction: TDirection,
  nextHead: INode,
) => {
  const { history, ...snapshot } = state
  const { head, body, food } = state

  const isEating = isCollision(food, nextHead)

  const nextBody = isEating ? [head, ...body] : [head, ...body.slice(0, -1)]

  const isDead =
    nextHead.x < 0 ||
    nextHead.x > MAX_X ||
    nextHead.y < 0 ||
    nextHead.y > MAX_Y ||
    nextBody.some((node) => isCollision(node, nextHead))

  const getNextFood = (): INode => {
    const maybeNextFood = getRandomNode()

    return [head, ...body].some((node) => isCollision(node, maybeNextFood))
      ? getNextFood()
      : maybeNextFood
  }

  return {
    ...state,
    head: nextHead,
    body: nextBody,
    food: isEating ? getNextFood() : food,
    direction,
    score: (nextBody.length - 1) * 50,
    dead: isDead,
    history: [...state.history, snapshot],
  }
}
