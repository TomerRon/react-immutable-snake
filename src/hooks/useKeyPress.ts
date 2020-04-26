import { useEffect } from 'react'

const useKeyPress = (callback: (e: KeyboardEvent) => any) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault()
      callback(e)
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [callback])
}

export default useKeyPress
