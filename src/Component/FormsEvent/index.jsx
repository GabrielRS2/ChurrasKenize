import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ThemeInput } from "../../Styles/ThemeInput";
import ThemeButton from "../../Styles/ThemeButton";
import { ThemeSelect } from "../../Styles/ThemeSelect";
import { Container } from "./style";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import api from "../../Services";

export const FormsEvent = ({ handleCloseModal,comboId }) => {
  const {user} = useContext(UserContext)
  const token = JSON.parse(localStorage.getItem("@churraskenzie:token"));
  const history = useHistory();

  function goToLoginPage(){
    history.push("/login");
  }


  const schema = yup.object().shape({
    date: yup.string().required("Campo Obrigatório"),
    time: yup.string().required("Campo Obrigatório"),
    neighbours: yup.string().required("Campo Obrigatório"),
    street: yup.string().required("Campo Obrigatório"),
    numberLocal: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
      data["combo"] = comboId;
      data["userId"] = user.id;
      api
      .post("/events",data,{
        headers: {
          Authorization: `Bearer ${token}`,
        }
  })
  .then((_)=>handleCloseModal());
}

  return (
    <Container className="eventForm" onSubmit={handleSubmit(onSubmitFunction)}>
      {token ? (
      <>
      <div className="headerModal">
        <p>Solicite um evento</p>
        <button onClick={handleCloseModal}>X</button>
      </div>
      <ThemeInput
        label="Cidade do evento"
        name="city"
        type="text"
        placeholder="Digite o nome do evento"
        error={errors.name?.message}
        register={register}
      />
      <ThemeSelect
        label="Estado"
        name="state"
        error={errors.state?.message}
        register={register}
      >
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
      </ThemeSelect>
      <ThemeInput
        label="Data"
        name="date"
        type="text"
        placeholder="Digite a data do evento"
        error={errors.date?.message}
        register={register}
      />

      <ThemeSelect
        label="Horário"
        name="time"
        error={errors.time?.message}
        register={register}
      >
        <option value="day">Diurno</option>
        <option value="nigth">Noturno</option>
      </ThemeSelect>
      <ThemeInput
        label="Bairro"
        name="neighbours"
        placeholder="Digite o bairro do evento"
        error={errors.neighbours?.message}
        register={register}
      />
      <ThemeInput
        label="Rua"
        name="street"
        placeholder="Digite a rua do evento"
        error={errors.street?.message}
        register={register}
      />
      <ThemeInput
        label="Numero do local"
        name="numberLocal"
        type="number"
        placeholder="Digite a duração do evento"
        error={errors.numberLocal?.message}
        register={register}
      />

      <ThemeButton schema="var(--red-2)" large type="submit">
        Solicitar evento
      </ThemeButton>
      </>) : (<div className="validationLogin">
          <p>
            É necessario estar logado para solicitar um evento. Deseja fazer o
            login?
          </p>
          <div className="validationButtons">
            <ThemeButton schema="var(--red-2)" handleClick={goToLoginPage}>Sim</ThemeButton>
            <ThemeButton schema="var(--red-2)" handleClick={handleCloseModal}>Não</ThemeButton>
          </div>
        </div>)}
      
    </Container>
  );
};
