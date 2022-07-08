import { useHistory } from "react-router-dom"
import { Container } from './style'
import Logo from '../../Assets/Logo.svg'
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import { MenuLateral } from "../MenuLateral/index.jsx"
import ThemeButton from "../../Styles/ThemeButton";
import { UserContext, UserProvider } from "../../Providers/User";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [token, setToken] = useState("");
    const history = useHistory();
    const { user } = useContext(UserContext);
    
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
        setIsLogged(false);
        localStorage.clear();
        console.log(JSON.parse(localStorage.getItem("@churraskenzie:token")));
        console.log(user);
    }

    return(
        <Container isOpen={isOpen}>
            <header>
                <img src={Logo} alt="logo do site" onClick={() => history.push("/")}/>
                <nav>
                    {isLogged ? (
                    <ul>
                        <li><ThemeButton handleClick={() => history.push("/")}>Home</ThemeButton></li>
                        <li><ThemeButton handleClick={() => history.push("/aboutUs")}>About Us</ThemeButton></li>
                        {user.category === "Churrasqueiro" ? (
                            <li><ThemeButton handleClick={() => history.push("/dashboardBbc")}>Dashboard</ThemeButton></li>
                        ) : (
                            <li><ThemeButton handleClick={() => history.push("/events")}>Eventos</ThemeButton></li>
                        )}

                        <li><ThemeButton handleClick={handleLogout}>Logout</ThemeButton></li>
                    </ul>
                    ) : (
                    <ul>
                        <li><ThemeButton handleClick={() => history.push("/")}>Home</ThemeButton></li>
                        <li><ThemeButton handleClick={() => history.push("/aboutUs")}>About Us</ThemeButton></li>
                        <li><ThemeButton handleClick={() => history.push("/login")}>Login</ThemeButton></li>
                        <li><ThemeButton handleClick={() => history.push("/register")}>Register</ThemeButton></li>
                    </ul>
                    )}
                </nav>

                {isOpen? <MdClose onClick={showMenu} className='icon__close'/> : <MdMenu onClick={showMenu} className='icon__menu'/>}
            </header>
                {isOpen && <MenuLateral handleLogout={handleLogout} isLogged={isLogged} isOpen={isOpen}/>}   
        </Container>
    )
}