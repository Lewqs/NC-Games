import axios from "axios";

const ncGames = axios.create({
  baseURL: "https://lewis-nc-games.onrender.com/api",
});

export const getReviews = () => {
  return ncGames.get("/reviews").then(({ data }) => data.reviews);
};

export const getReviewById = (review_id) => {
  return ncGames.get(`/reviews/${review_id}`).then(({ data }) => data.review);
};

export const getUser = (username) => {
  return ncGames.get(`/users/${username}`).then(({ data }) => data.user);
};

export const getComments = (review_id) => {
  return ncGames
    .get(`/reviews/${review_id}/comments`)
    .then(({ data }) => data.comments);
};
