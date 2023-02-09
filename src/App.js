import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/reviews/:review_id" element={<SingleReview />}></Route>
        <Route path="/*" element={<Navigate to="/reviews" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
