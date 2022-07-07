import { Container } from "./style";
import { Link } from "react-router-dom";


export const MenuLateral = ({ isOpen, isLogged, handleLogout }) => {
  return (
      <Container isOpen={isOpen}>
        <div className="wrapper">
          {isLogged ? (
          <ul>
          <li>
            <Link to="/home" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/#" className="link">
              About Us
            </Link>
          </li>
          <li>
            <button className="logoutBtn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
          ) : (
          <ul>
            <li>
              <Link to="/home" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#" className="link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </ul>
          )}

        </div>
      </Container>
  );
};
