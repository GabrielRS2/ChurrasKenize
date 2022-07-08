import { Link } from "react-router-dom"
import { Container } from './style'
import Logo from '../../Assets/Logo.svg'
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from 'react';
import { MenuLateral } from "../MenuLateral/index.jsx"
import ThemeButton from "../../Styles/ThemeButton";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [token, setToken] = useState("");
    
    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem("@churraskenzie:token")))
        if(token) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    },[token])

    function showMenu(){
        setIsOpen(!isOpen)
    }

    function handleLogout() {
        console.log("oi");
        setIsLogged(false);
        localStorage.clear();
        console.log(JSON.parse(localStorage.getItem("@churraskenzie:token")))
    }

    return(
        <Container isOpen={isOpen}>
            <header>
                <img src={Logo} alt="logo do site" />
                <nav>
                    {isLogged ? (
                    <ul>
                        <li><ThemeButton><Link to="/" className="link">Home</Link></ThemeButton></li>
                        <li><ThemeButton><Link to="/aboutUs" className="link">About Us</Link></ThemeButton></li>
                        <li><ThemeButton handleClick={handleLogout}>Logout</ThemeButton></li>
                    </ul>
                    ) : (
                    <ul>
                        <li><ThemeButton><Link to="/" className="link">Home</Link></ThemeButton></li>
                        <li><ThemeButton><Link to="/aboutUs" className="link">About Us</Link></ThemeButton></li>
                        <li><ThemeButton><Link to="/login" className="link">Login</Link></ThemeButton></li>
                        <li><ThemeButton><Link to="/register" className="link">Register</Link></ThemeButton></li>
                    </ul>
                    )}
                </nav>

                {isOpen? <MdClose onClick={showMenu} className='icon__close'/> : <MdMenu onClick={showMenu} className='icon__menu'/>}
            </header>
                {isOpen && <MenuLateral handleLogout={handleLogout} isLogged={isLogged} isOpen={isOpen}/>}   
        </Container>
    )
}