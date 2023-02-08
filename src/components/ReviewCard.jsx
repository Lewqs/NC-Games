import { Link } from "react-router-dom";
import { timeDifference } from "../utils/helpers";

const ReviewCard = ({ review }) => {
  return (
    <>
      <br />

      <Link to={`/reviews/${review.review_id}`}>
        <article className="review_card">
          <img
            src={review.review_img_url}
            alt={`The game relating to the review ${review.title}`}
            className="review_card_img"
          />
          <div className="review_card_details_left">
            <h2 className="review_card_title">{review.title}</h2>
            <p className="review_card_createdby">
              Created By {review.owner} | {timeDifference(review.created_at)}
              <span className="full_date_and_time">
                {new Date(review.created_at).toLocaleDateString()} at{" "}
                {new Date(review.created_at).toLocaleTimeString()}
              </span>
            </p>
          </div>
          <div className="review_card_details_right">
            <p className="review_card_votes">{review.votes} Votes</p>
            <p className="review_card_category">{review.category}</p>
          </div>
        </article>
      </Link>
    </>
  );
};

export default ReviewCard;
