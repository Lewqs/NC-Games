import { useEffect, useState } from "react";
import { getUser } from "../utils/api";
import { fullDateAndTime, timeDifference } from "../utils/helpers";

const CommentCard = ({ comment }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(comment.author).then((data) => {
      setUser(data);
    });
  });

  return (
    <article className="comments-section">
      <div className="user-info">
        <img className="user-avatar" src={user.avatar_url} alt="User Profile" />
        <span className="username">{comment.author}</span>
        <p
          className="timestamp"
          onMouseLeave={(e) => {
            e.target.innerText = timeDifference(comment.created_at);
          }}
          onMouseOver={(e) => {
            e.target.innerText = fullDateAndTime(comment.created_at);
          }}>
          {timeDifference(comment.created_at)}
        </p>
      </div>
      <div className="comment-body">
        <p className="comment-text">{comment.body}</p>
        <div className="vote-buttons">
          <button>
            <i class="fa-regular fa-thumbs-up"></i> Upvote
          </button>
          <button>
            <i class="fa-regular fa-thumbs-down"></i> Downvote
          </button>
        </div>
      </div>
    </article>
  );
};

export default CommentCard;
