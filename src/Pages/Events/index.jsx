import { Container } from "./style";
import background from "./../../Assets/Background-User.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const EventsPage = () => {
  const schema = yup.object().shape({
    date: yup.string().required("Campo Obrigatório"),
    time: yup.string().required("Campo Obrigatório"),
    duration: yup.string().required("Campo Obrigatório"),
    state: yup.string().required("Campo Obrigatório"),
    city: yup.string().required("Campo Obrigatório"),
    combo: yup.string().required("Campo Obrigatório"),
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
      <div className="entirePage">
      <div className="bodyEventPage">
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <p>Solicite um evento</p>
          <label>
            Data {<span className="error">{errors.date?.message}</span>}
          </label>
          <input
            name="date"
            placeholder="Digite a data do evento"
            {...register("date")}
          />

          <label>
            Horário{<span className="error">{errors.time?.message}</span>}
          </label>
          <input
            name="time"
            placeholder="Digite o horário do evento"
            {...register("time")}
          />

          <label>
            Duração{<span className="error">{errors.duration?.message}</span>}
          </label>
          <input
            name="duration"
            placeholder="Digite a duração do evento"
            {...register("duration")}
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
            Cidade{<span className="error">{errors.city?.message}</span>}
          </label>
          <input
            name="city"
            placeholder="Digite a cidade do evento"
            {...register("city")}
          />
          <label>
            Combo{<span className="combo">{errors.combo?.message}</span>}
          </label>
          <input
            name="combo"
            placeholder="Digite o combo desejado"
            {...register("combo")}
          />
          <button type="submit">Solicitar evento</button>
        </form>
      </div>
        <div className="infoProfile">
          <div className="profile">
            <p>Meu perfil</p>
          </div>
          <div className="events">
            <p>Eventos</p>
          </div>
        </div>
        </div>
      <img src={background} alt="background" />
    </Container>
  );
};
