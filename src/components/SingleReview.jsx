import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import { timeDifference } from "../utils/helpers";
import Loading from "./Loading";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getReviewById(review_id).then((data) => {
      setReview(data);
      setLoading(false);
    });
  }, [review_id, review.owner]);

  if (loading) return <Loading />;

  return (
    <section className="review">
      <h2 className="review-title">{review.title}</h2>
      <div className="review-owner">
        <h3>{review.owner}</h3>
        <h4>{timeDifference(review.created_at)}</h4>
      </div>
      <article className="review-body">{review.review_body}</article>
      <img
        src={review.review_img_url}
        alt={`The game relating to the review ${review.title}`}
        className="review-image"></img>
      <div className="review-statistics">
        <div className="review-votes">
          {review.votes}
          {" Vote"} <button className="review-vote-btn">Vote</button>
        </div>
        <div className="review-comment_count">
          {review.comment_count}
          {" Comments"}
          <button className="review-comment-btn">Comment</button>
        </div>
      </div>
    </section>
  );
};

export default SingleReview;
