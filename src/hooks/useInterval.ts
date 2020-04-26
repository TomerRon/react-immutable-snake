import { useEffect, useRef } from 'react'

const useInterval = (callback: () => any, delay: number) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback // tslint:disable-line no-object-mutation
  }, [callback])

  useEffect(() => {
    const interval = setInterval(() => callbackRef.current(), delay)

    return () => clearInterval(interval)
  }, [delay])
}

export default useInterval
