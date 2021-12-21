import { useEffect } from 'react'

export default function useKeyPress(key, callback) {
   function keyUp(e) {
      if (e.key === key) callback()
   }

   useEffect(() => {
      window.addEventListener('keyup', keyUp)
      return () => window.removeEventListener('keyup', keyUp)
   }, [])
}
