import { FormsLogin } from "../../Component/FormsLogin";
import { Logo } from "../../Component/Logo";
import Login from "./../../Assets/Login-image.svg";
import { Container } from "./style";

export const LoginPage = () => {
  return (
    <Container>
      <div className="background">
        <Logo />
        <FormsLogin />
      </div>
      <img src={Login} alt="login background" className="loginImage" />
    </Container>
  );
};
