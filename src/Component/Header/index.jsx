import { Link } from "react-router-dom"
import { Container } from './style'
import Logo from '../../Assets/Logo.svg'
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import { MenuLateral } from "../MenuLateral/index.jsx"
import ThemeButton from "../../Styles/ThemeButton";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    function showMenu(){
        setIsOpen(!isOpen)
    }

    return(
        <Container isOpen={isOpen}>
            <header>
                <img src={Logo} alt="logo do site" />

                <nav>
                    <ul>
                        <li><ThemeButton><Link to="/home" className="link">Home</Link></ThemeButton></li>
                        <li><ThemeButton><Link to="/#" className="link">About Us</Link></ThemeButton></li>
                        <li><ThemeButton><Link to="/login" className="link">Login</Link></ThemeButton></li>
                        <li><ThemeButton><Link to="/register" className="link">Register</Link></ThemeButton></li>
                    </ul>
                </nav>

                {isOpen? <MdClose onClick={showMenu} className='icon__close'/> : <MdMenu onClick={showMenu} className='icon__menu'/>}
            </header>
                {isOpen && <MenuLateral isOpen={isOpen}/>}
                
        </Container>
    )
}