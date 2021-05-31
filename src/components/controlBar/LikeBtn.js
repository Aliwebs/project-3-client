import React from 'react'
import { getLikes, isAuthenticated } from '../../lib/auth'
import { addLike } from '../../lib/api'

function LikeBtn({ id, type }) {
  const [isLiked, setIsLiked] = React.useState(false)
  const loggedIn = isAuthenticated()

  //! Check if user likes this Item
  React.useEffect(() => {
    if (loggedIn === true && getLikes().includes(id)) {
      setIsLiked(true)
    } else {
      setIsLiked(false)
    }
  }, [id, loggedIn])

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const res = await addLike(type, id, e.target.value)
      localStorage.setItem('likes', JSON.stringify(res.data.likes))
      setIsLiked(!isLiked)
    } catch (err) {
      console.log(err.res)
    }
  }
  return (
    <>
      {isLiked ? (
        <button
          className="button is-danger"
          value="minus"
          onClick={handleClick}
        >
          🤍
        </button>
      ) : (
        <button className="button" value="plus" onClick={handleClick}>
          🤍
        </button>
      )}
    </>
  )
}

export default LikeBtn
