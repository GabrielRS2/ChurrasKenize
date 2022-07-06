import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Login from "./../../Assets/Login-image.svg";
import Logo from "./../../Assets/Logo.svg";
import { Container } from "./style";
import { ThemeInput } from "../../Styles/ThemeInput";

export const RegisterPage = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo Obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    city: yup.string().required("Campo Obrigatório"),
    state: yup.string().required("Campo Obrigatório"),
    contact: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
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
      <img src={Login} alt="login background" className="loginImage" />
      <div className="background">
        <img src={Logo} alt="Logo" className="logoImage" />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <p>Crie sua conta</p>
          <ThemeInput
            label="Nome"
            name="name"
            placeHolder="Digite seu nome"
            error={errors.name?.message}
            register={register}
          />

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
          <ThemeInput
            label="Confirmar senha"
            name="passwordConfirm"
            placeHolder="Confirmação de senha"
            type="password"
            error={errors.passwordConfirm?.message}
            register={register}
          />

          <label>Estado</label>
          <select name="state" {...register("state")}>
            <option value="">Selecione o estado</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
            <option value="EX">Estrangeiro</option>
          </select>

          <ThemeInput
            label="Cidade"
            name="city"
            placeHolder="Digite sua cidade"
            error={errors.city?.message}
            register={register}
          />
          <ThemeInput
            label="Contato"
            name="contact"
            placeHolder="Digite seu contato"
            error={errors.contact?.message}
            register={register}
          />

          <label>
            Sou:
            {<span className="error">{errors.course_module?.message}</span>}
          </label>
          <select name="category" {...register("category")}>
            <option value="">Selecione a categoria</option>
            <option value={"Churrasqueiro"}>Churrasqueiro</option>
            <option value={"Consumidor"}>Consumidor</option>
          </select>

          <button type="submit">Cadastrar</button>
          <span>Já possui uma conta?</span>
          <Link to="/login">Faça o login</Link>
        </form>
      </div>
    </Container>
  );
};
