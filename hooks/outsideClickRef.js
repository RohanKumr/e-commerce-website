import { useEffect, useRef } from 'react'

const useOnClickOutsideRef = (callback, initialValue = null) => {
  const elementRef = useRef(initialValue)
  const handler = (event) => {
    if (!elementRef.current?.contains(event.target)) {
      callback()
    }
  }
  useEffect(() => {
    window.addEventListener('mousedown', handler)
    return () => window.removeEventListener('mousedown', handler)
  }, [callback])
  return elementRef
}


export default useOnClickOutsideRef