import React from 'react'
import { useWishlistContext } from '../../context/ContextStore'
const Book = ({title, author, imgSrc, publisher, publishDate, description, id}) => {
  let setWishList = useWishlistContext()[1]
  const handleClick = () => {
    setWishList({type: "wishlist/add", payload: {title, id}})
  }
  return (
    <li onClick={handleClick}>
        <div className='book--info__container'>
          {imgSrc ? <img className='img--responsive' src={imgSrc} alt={description}></img> : null}
          <div className='book--text__container'>
            <h3>{title}</h3>
            <p>
                <span className="text--bold">Author: </span>{author}
            </p>
            <p>
                <span className="text--bold">Description: </span>{description}
            </p>
            <p>
                <span className="text--bold">Publisher: </span>{publisher ? `Published by ${publisher}` : null} {publishDate && publisher ? `on ${publishDate}` : null}
            </p>

          </div>
    </div>
      </li>
  )
}

export default Book