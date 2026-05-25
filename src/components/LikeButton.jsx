import { useState } from 'react';
import './LikeButton.css';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);

  return (
    <div className="like-section">
      <button className="btn-primary" onClick={handleLike}>
        Like
      </button>
      <span className="like-count">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
    </div>
  );
}

export default LikeButton;
