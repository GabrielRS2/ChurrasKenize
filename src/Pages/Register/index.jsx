import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Login from "./../../Assets/Login-image.svg";
import Logo from "./../../Assets/Logo.svg";
import { Container } from "./style";

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
    cidade: yup.string().required("Campo Obrigatório"),
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
      <div>
        <img src={Logo} alt="Logo" className="logoImage" />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <p>Crie sua conta</p>
          <label>
            Nome {<span className="error">{errors.name?.message}</span>}
          </label>
          <input
            name="name"
            placeholder="Digite seu nome"
            {...register("name")}
          />

          <label>
            Email{<span className="error">{errors.email?.message}</span>}
          </label>
          <input
            name="email"
            placeholder="Digite seu email"
            {...register("email")}
          />

          <label>
            Senha{<span className="error">{errors.password?.message}</span>}
          </label>
          <input
            name="password"
            placeholder="Digite uma senha"
            type="password"
            {...register("password")}
          />

          <label>
            Confirmar Senha
            {<span className="error">{errors.passwordConfirm?.message}</span>}
          </label>
          <input
            name="passwordConfirm"
            placeholder="Confirmação de senha"
            type="password"
            {...register("passwordConfirm")}
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
          <label>
            Cidade{<span className="error">{errors.cidade?.message}</span>}
          </label>
          <input
            name="cidade"
            placeholder="Digite sua cidade"
            {...register("cidade")}
          />

          <label>
            Contato{<span className="error">{errors.contact?.message}</span>}
          </label>
          <input
            name="contact"
            placeholder="Digite seu contato"
            {...register("contact")}
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
