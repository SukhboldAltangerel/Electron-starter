import { useEffect } from 'react'

export default function useClickOutside(refsArray, condition, callback) {
   function handleClick(e) {
      if (condition && refsArray.every(ref => !ref.current?.contains(e.target))) {
         callback()
      }
   }

   useEffect(() => {
      document.addEventListener('mousedown', handleClick)
      return () => document.removeEventListener('mousedown', handleClick)
   })
}
