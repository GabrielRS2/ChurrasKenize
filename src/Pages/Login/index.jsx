import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Login from "./../../Assets/Login-image.svg";
import Logo from "./../../Assets/Logo.svg";
import { Container } from "./style";
import { ThemeInput } from "../../Styles/ThemeInput";

export const LoginPage = () => {
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

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <div className="background">
        <img src={Logo} alt="Logo" className="logoImage" />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <p>Login</p>
          {/* <label>Email</label>
          <input
            name="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {<span className="error">{errors.email?.message}</span>} */}
          <ThemeInput
            label="Email"
            name="email"
            placeHolder="Digite seu email"
            error={errors.email?.message}
            register={register}
          />

          <ThemeInput
            label="Senha"
            name="password"
            placeHolder="Digite sua senha"
            type="password"
            error={errors.password?.message}
            register={register}
          />

          {/* <label>Senha</label>
          <input
            name="password"
            placeholder="Digite uma senha"
            type="password"
            {...register("password")}
          />
          {<span className="error">{errors.password?.message}</span>} */}

          <button type="submit">Entrar</button>
          <span>Ainda não possui uma conta?</span>
          <Link to="/register">Cadastre-se</Link>
        </form>
      </div>
      <img src={Login} alt="login background" className="loginImage" />
    </Container>
  );
};
