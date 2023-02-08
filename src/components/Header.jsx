import { useNavigate } from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();

  return (
    <header>
      <div className="header_title">
        <h1 onClick={() => navigate("/")}>NC Games Reviews</h1>
      </div>
      <div className="header_buttons">
        <button onClick={() => navigate("/users")}>Users</button>
        <button onClick={() => navigate("/")}>Reviews</button>
      </div>
    </header>
  );
};

export default Header;
