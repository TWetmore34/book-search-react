import {useEffect, useState} from 'react'

const Loading = () => {
    let [loadState, setLoadState] = useState("Loading");
    let timer = setInterval(() => {
        setLoadState(prev => {
            if(prev.length === "Loading...".length) {
                return "Loading"
            }
            return prev + "."
        })
    }, 100)
    useEffect(() => {
      return () => {
        clearInterval(timer)
      }
    })
  return (
    <p className='text-center'>{loadState}</p>
  )
}

export default Loading