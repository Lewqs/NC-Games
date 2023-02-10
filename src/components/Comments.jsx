import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";
import Loading from "./Loading";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComments(review_id).then((data) => {
      setComments(data);
      setLoading(false);
    });
  }, [review_id]);

  return (
    <section className="review-comments hidden">
      {loading ? (
        <Loading />
      ) : comments.length > 0 ? (
        comments.map((comment) => {
          return <CommentCard comment={comment} />;
        })
      ) : (
        <h2>Be the first to comment!</h2>
      )}
    </section>
  );
};

export default Comments;
