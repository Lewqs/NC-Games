import { createContext, useEffect, useState } from "react";
import { getReviews } from "../utils/api";

export const ReviewsContext = createContext();

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, []);

  return (
    <ReviewsContext.Provider value={{ reviews, setReviews, loading }}>
      {children}
    </ReviewsContext.Provider>
  );
};
