import {useEffect, useState} from 'react'

const Loading = () => {
  // add "." to Loading every .1 secs to make sure there's movement in the loading state
    let [loadState, setLoadState] = useState("Loading");
    let timer = setInterval(() => {
        setLoadState(prev => {
            if(prev.length === "Loading...".length) {
                return "Loading"
            }
            return prev + "."
        })
    }, 100)
    // on component's unmount, clear timer interval
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