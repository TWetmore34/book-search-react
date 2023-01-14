import React, { useState } from 'react'
import { useWishlistContext } from '../../context/ContextStore'
import { addWishlist } from '../../context/actionCreators'
const Book = ({title, author, imgSrc, publisher, publishDate, description, id}) => {
  // expansion and overFlowY are for styling. Default state hides lengthy descriptions, while onClick event shows the full page
  const [expand, setExpand] = useState(true)
  const [overflowY, setOverflow] = useState({overflowY: "hidden", height: "30vh"});

  // global wishlist dispatcher
  let setWishList = useWishlistContext()[1]

  // call dispatcher with id and title of current book
  const handleClick = () => {
    setWishList(addWishlist(id, title))
  }

  const handleExpansion = () => {
    // flip expansion and set styles to either expanded or shrunk
    setExpand(!expand)
    if(expand) {
      setOverflow({overflowY: "visible", height: "auto"})
    } else {
      setOverflow({overflowY: "hidden", height: "30vh"})
    }

  }
  return (
    <li onClick={handleClick}>
        <div className='book--info__container'>
          {imgSrc ? <img className='img--responsive' src={imgSrc} alt={description}></img> : null}
          <div className='book--text__container' style={overflowY}>
            <h3>{title}</h3>
            <p>
                <span className="text--bold">Author: </span>{author}
            </p>
            <p>
                <span className="text--bold">Publisher: </span>{publisher ? `Published by ${publisher}` : null} {publishDate && publisher ? `on ${publishDate}` : null}
            </p>
            <p>
                <span className="text--bold">Description: </span>{description}
            </p>
          </div>
            <button onClick={(e) => {
              e.stopPropagation()
              handleExpansion()
            }} className='btn--expand'>{expand ? "Expand" : "Shrink"}</button>
    </div>
      </li>
  )
}

export default Book