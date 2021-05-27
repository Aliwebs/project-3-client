import React from 'react'
import SongComment from '../comment/SongComment'

function SongListItem({ _id, name, comments, cover, singer, album }) {
  const [commentHidden, setCommentHidden] = React.useState(false)
  const handleCommentExpand = () => {
    setCommentHidden(!commentHidden)
  }

  return (
    <div key={name} className="column is-full">
      <div className="box">
        <div className="media" key={_id}>
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={cover} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <strong className="title">{name}</strong>
              <br />
              <small className="subtitle">{singer.name}</small>
              <br />
              <small>{album.name}</small>
            </div>
            <div>
              <button className="is-info" onClick={handleCommentExpand}>Expand</button>
              {commentHidden &&
              <SongComment commentsPassed={comments} id={_id} />
              }
            </div>
          </div>
          <div className="field is-grouped has-addons">
            <div className="media-right">
              <button className="icon">🤍</button>
            </div>
            <div className="media-right">
              <button className="icon">➕</button>
            </div>
            <div className="media-right">
              <button className="icon">▶️</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongListItem
