import { useEffect, useState } from 'react'

type WindowDimentions = {
  width: number | undefined
  height: number | undefined
}

const useWindowSize = () => {
  const INITIAL_STATE: WindowDimentions = {
    width: undefined,
    height: undefined,
  }
  const [windowSize, setWindowSize] = useState(INITIAL_STATE)

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}

export default useWindowSize
