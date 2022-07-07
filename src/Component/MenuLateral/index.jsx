import { Container } from "./style";
import { Link } from "react-router-dom";


export const MenuLateral = ({ isOpen }) => {
  return (
      <Container isOpen={isOpen}>
        <div className="wrapper">
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
        </div>
      </Container>
  );
};
