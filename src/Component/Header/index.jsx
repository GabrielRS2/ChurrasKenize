import { Link } from "react-router-dom"
import { Container } from './style'
import Logo from '../../Assets/Logo.svg'

export const Header = () => {
    return(
        <Container>
            <header>
                <img src={Logo} alt="logo do site" />

                <nav>
                    <ul>
                        <li><button><Link to="/home" className="link">Home</Link></button></li>
                        <li><button><Link to="/#" className="link">About Us</Link></button></li>
                        <li><button><Link to="/login" className="link">Login</Link></button></li>
                        <li><button><Link to="/register" className="link">Register</Link></button></li>
                    </ul>
                </nav>
            </header>
        </Container>
    )
}