import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Container, Row, Table } from 'reactstrap'
import Snapshot from '../components/Snapshot'
import { useSelector } from '../store'
import { setBoardState } from '../store/board/actions'
import { IBoardState } from '../store/board/types'

const Stats: React.FC = () => {
  const { dead, history } = useSelector((state) => state.board)
  const dispatch = useDispatch()
  const [count, setCount] = useState(10)

  const handlePlayFromHere = (snapshot: Omit<IBoardState, 'history'>) =>
    dispatch(
      setBoardState({
        ...snapshot,
        paused: true,
        history: [],
      }),
    )

  useEffect(() => {
    setCount(10)
  }, [dead])

  return !dead ? (
    <Container className="text-center">
      <p>Useful stats will appear here after you finish a game.</p>
    </Container>
  ) : (
    <Container fluid className="text-center">
      <Row>
        <Table responsive hover>
          <tbody>
            {[...history]
              .reverse()
              .slice(0, count)
              .map((snapshot, i) => (
                <Snapshot
                  key={i}
                  count={history.length - i}
                  onPlayFromHere={() => handlePlayFromHere(snapshot)}
                  snapshot={snapshot}
                />
              ))}
          </tbody>
        </Table>
        {count < history.length && (
          <Button
            color="primary"
            className="mx-auto"
            onClick={() => setCount(count + 10)}
          >
            Load more
          </Button>
        )}
      </Row>
    </Container>
  )
}

export default Stats
