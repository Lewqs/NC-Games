import { Link } from "react-router-dom";
import { fullDateAndTime, timeDifference } from "../utils/helpers";

const ReviewCard = ({ review }) => {
  return (
    <>
      <br />
      <Link to={`/reviews/${review.review_id}`}>
        <article className="review-card">
          <img
            src={review.review_img_url}
            alt={`The game relating to the review ${review.title}`}
            className="review-card-img"
          />
          <div className="review-card-details left">
            <h2 className="review-card-title">{review.title}</h2>
            <p className="review-card-createdby">
              Created By {review.owner} ·
              <span
                className="review-card-timestamp"
                onMouseLeave={(e) =>
                  (e.target.innerText = timeDifference(review.created_at))
                }
                onMouseOver={(e) =>
                  (e.target.innerText = fullDateAndTime(review.created_at))
                }>
                {timeDifference(review.created_at)}
              </span>
            </p>
          </div>
          <div className="review-card-details right">
            <p className="review-card-votes">{review.votes} Votes</p>
            <p className="review-card-category">{review.category}</p>
          </div>
        </article>
      </Link>
    </>
  );
};

export default ReviewCard;
