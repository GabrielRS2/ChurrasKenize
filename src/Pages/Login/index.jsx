import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Login from "./../../Assets/Login-image.svg";
import Logo from "./../../Assets/Logo.svg";
import { Container } from "./style";
import { ThemeInput } from "../../Styles/ThemeInput";
import ThemeButton from "../../Styles/ThemeButton";
import { useContext } from "react";
import { ApiContext } from "../../Providers/Api";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const history = useHistory();

  const { loginUser } = useContext(ApiContext);

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = async (data) => {
    const res = await loginUser(data);
    if (res.name !== "AxiosError") {
      localStorage.setItem(
        "@churraskenzie:token",
        JSON.stringify(res.data.accessToken)
      );
      localStorage.setItem(
        "@churraskenzie:user",
        JSON.stringify(res.data.user)
      );
      history.push("/");
    } else {
      toast.error("Usuario ou senha inválido");
    }
  };

  return (
    <Container>
      <div className="background">
        <img src={Logo} alt="Logo" className="logoImage" />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <p>Login</p>

          <ThemeInput
            label="Email"
            name="email"
            placeholder="Digite seu email"
            error={errors.email?.message}
            register={register}
          />

          <ThemeInput
            label="Senha"
            name="password"
            placeholder="Digite sua senha"
            type="password"
            error={errors.password?.message}
            register={register}
          />

          <ThemeButton schema="var(--red-2)" large type="submit">
            Entrar
          </ThemeButton>
          <span>Ainda não possui uma conta?</span>
          <Link to="/register">
            <ThemeButton schema="var(--grey-2)" large>
              Cadastre-se
            </ThemeButton>
          </Link>
        </form>
      </div>
      <img src={Login} alt="login background" className="loginImage" />
    </Container>
  );
};
