import axios from "axios";

const ncGames = axios.create({
  baseURL: "https://lewis-nc-games.onrender.com/api",
});

export const getReviews = () => {
  return ncGames.get("/reviews").then(({ data }) => data.reviews);
};
