import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import { fullDateAndTime, timeDifference } from "../utils/helpers";
import Comments from "./Comments";
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

  const handleClick = (e) => {
    if (e.target.innerText.includes("View")) {
      e.target.innerText = "Hide Comments";
    } else {
      e.target.innerText = "View Comments";
    }
    const commentSection = document.querySelector(".review-comments");
    commentSection.scrollIntoView();

    if (commentSection.classList.contains("hidden")) {
      commentSection.classList.remove("hidden");
      commentSection.classList.add("show");
    } else {
      commentSection.classList.remove("show");
      commentSection.classList.add("hidden");
    }
  };

  return (
    <>
      <section className="review">
        <h2 className="review-title">{review.title}</h2>
        <div className="review-owner">
          <h3>{review.owner}</h3>
          <h4
            onMouseLeave={(e) => {
              e.target.innerText = timeDifference(review.created_at);
            }}
            onMouseOver={(e) => {
              e.target.innerText = fullDateAndTime(review.created_at);
            }}>
            {timeDifference(review.created_at)}
          </h4>
        </div>
        <article className="review-body">{review.review_body}</article>
        <img
          src={review.review_img_url}
          alt={`The game relating to the review ${review.title}`}
          className="review-image"></img>
        <div className="review-statistics">
          <div className="review-votes">
            {`${review.votes} Votes`}
            <div
              className="review-votes-btns"
              style={{ display: "flex", flexDirection: "row" }}>
              <button className="review-vote-btn">
                <i class="fa-regular fa-thumbs-up"></i> Upvote
              </button>
              <button className="review-vote-btn">
                <i class="fa-regular fa-thumbs-down"></i> Downvote
              </button>
            </div>
          </div>
          <div className="review-comment_count">
            {`${review.comment_count} Comments`}
            <button className="review-comment-btn" onClick={handleClick}>
              View Comments
            </button>
          </div>
        </div>
      </section>
      <Comments review_id={review_id} />
    </>
  );
};

export default SingleReview;
